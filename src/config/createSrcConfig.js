const fs = require('fs');
const path = require('path');
console.log("开始创建配置文件");
let modelPathArr = [];
let routerPathArr = [];
let num = 0;

function readDir(dir) {
    const stats = fs.statSync(dir);
    if (stats.isDirectory()) {
        const files = fs.readdirSync(dir);
        files.map(item => {
            let curPath = path.join(dir, item);
            readDir(curPath);
        });
    } else {
        matchFile(dir);
    }
}

function matchFile(path) {
    if (/\.model.tsx$/.test(path)) {
        //model
        modelPathArr.push(path);
    } else if (/routerConfig.json$/.test(path)) {
        //router
        routerPathArr.push(path);
    }
}

function modelTemplate(arrPath) {
    const modelName = 'src\/config\/modelConfig.tsx';
    let imp = '';
    let modelArr = "const modelArr = [\n";
    arrPath.forEach((item, index) => {
        const curPath = convertPath1(item);
        imp += "import " + "lgg" + index + " from " + convertString(curPath) + ";\n";
        modelArr += "lgg" + index + ",\n";
    });
    modelArr += "];\n";
    const exp = "export default modelArr;";
    const data = imp + modelArr + exp;
    fs.writeFileSync(modelName, data);
}

function routerTemplate(arrPath) {
    const modelName = 'src\/config\/componentRouter.tsx';
    const modelName1 = 'src\/config\/mapPathToModel.tsx';
    let imp = '';
    let impModel="";
    let modelArr = "const componentRouter = [\n";
    let mapObj = "const mapPathToModel:any = {\n";
    arrPath.forEach((item, index) => {
        //加载router.json
        const json = loadJson(item);
        //转化path
        const path = convertPath2(item);
        for (let k in json) {
            let modelCurPath = false;
            modelPathArr.forEach(it => {
                const itemPath = convertPath2(it);
                if (path === itemPath) {
                    modelCurPath = convertPath1(it);
                }
            });
            const curPath = path + "/" + k;
            const curVar = 'lgg_' + genID(4);
            const url = json[k].path;
            const title = json[k].title;
            const modelName = json[k].modelName;
            imp += "import " + curVar + " from " + convertString(curPath) + ";\n";
            modelCurPath&&(impModel += "import " + curVar + " from " + convertString(modelCurPath) + ";\n");
            modelArr += "{\n" + "component:" + curVar + ",\n" + "path:" + convertString(url) + ",\n" + "title:" + convertString(title) + ",\n" + "},\n";
            mapObj += convertString(url) + ":{\ntitle:" + convertString(title) + ",\n" + "modelName:" + convertString(modelName) + ",\n" + "model:" + (modelCurPath?curVar:null) + ",\n},\n";
        }
    });
    modelArr += "];\n";
    mapObj += "};\n";
    const exp = "export default componentRouter;";
    const exp1 = "export default mapPathToModel;";
    const data = imp + modelArr + exp;
    const data1 = impModel+mapObj + exp1;
    fs.writeFileSync(modelName, data);
    fs.writeFileSync(modelName1, data1);
}

function convertPath1(path) {
    let newPath = path.replace(/\\/g, "/");
    newPath = newPath.replace(".tsx", "");
    return newPath.replace("src", "@")
}

function convertPath2(path) {
    let newPath = path.replace(/\\/g, "/");
    const num = newPath.lastIndexOf("/");
    newPath = newPath.substring(0, num);
    return newPath.replace("src", "@")
}

function loadJson(path) {
    try {
        const data = fs.readFileSync(path);
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
}

function genID(length) {
    num++;
    return Number(Math.random().toString() + Date.now()).toString(36).substr(3, length) + num;
}

function convertString(param) {
    return "\'" + param + "\'"
}

readDir('src');
modelTemplate(modelPathArr);
routerTemplate(routerPathArr);
modelPathArr = null;
routerPathArr = null;
console.log("配置文件创建完成");