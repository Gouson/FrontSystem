#!/usr/bin/env node
const program = require('commander');
program.version('0.0.1');
const api = require('./index.js')
program
    .option('-x, --xxx', 'what the x')
program
    .command('add <title>')
    .description('add a task 添加一个任务')
    .action((args) => {
        api.add(args).then(() => {
            console.log('添加成功')
        }, () => {
            console.log('添加失败')
        })
    });
program
    .command('clear')
    .description('clear all task 删除所有任务')
    .action(() => {
        api.clear().then(() => {
            console.log('清除成功')
        }, () => {
            console.log('清除失败')
        })
    });
if (process.argv.length === 2) {
    //说明用户直接运行node cli.js
    api.showAll()
}
program.parse(process.argv);