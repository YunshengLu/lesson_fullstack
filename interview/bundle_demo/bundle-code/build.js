const fs = require('fs');
const babylon = require('babylon');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');
const path = require('path');

function readCode(filePath) {
    // 同步阻塞 I/O
    const content = fs.readFileSync(filePath, 'utf-8');
    // console.log(content);
    const ast = babylon.parse(content, {
        sourceType: 'module',
    });
    // console.log(ast);
    // 在抽象语法树里游走
    // 收集依赖关系
    const dependencies = [];
    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            dependencies.push(node.source.value);
        },
    });
    // console.log(dependencies);
    const { code } = transformFromAst(ast, null, {
        presets: ['@babel/preset-env'],
    });
    // console.log(code);
    return {
        filePath,
        dependencies,
        code,
    };
}

function getDependencies(entry) {
    const entryObject = readCode(entry);
    const dependencies = [entryObject];
    // console.log(dependencies);
    for (const asset of dependencies) {
        // 目录拿到
        const dirname = path.dirname(asset.filePath); // 物理路径
        // console.log(dirname);
        asset.dependencies.forEach(relativePath => {
            const absolutePath = path.join(dirname, relativePath);
            // console.log(absolutePath);
            if (/\.css$/.test(absolutePath)) {
                const content = fs.readFileSync(absolutePath, 'utf-8');
                const code = `
                const style = document.createElement('style')
                style.innerText = ${JSON.stringify(content).replace(/\\r\\n/g, '')}
                document.head.appendChild(style)
                `;
                dependencies.push({
                    filePath: absolutePath,
                    relativePath,
                    dependencies: [],
                    code,
                });
            } else {
                const child = readCode(absolutePath);
                child.relativePath = relativePath;
                dependencies.push(child);
            }
        });
        // console.log(dependencies);
    }
    bundle(dependencies, entry);
}

function bundle(dependencies, entry) {
    let modules = '';
    dependencies.forEach(dep => {
        const filePath = dep.relativePath || entry;
        modules += `'${filePath}': (
            function (module, exports, require) { ${dep.code} }
        ),`;
    });
    const result = `
    (function(modules) {
        function require(id) {
            const module = { exports : {} }
            modules[id](module, module.exports, require)
            return module.exports
        }
        require('${entry}')
    })({${modules}})`;
    fs.writeFileSync('./bundle.js', result);
}

getDependencies('./entry.js');
