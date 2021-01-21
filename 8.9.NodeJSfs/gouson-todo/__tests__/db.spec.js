const db = require('../db.js')
const fs = require('fs')
jest.mock('fs')
describe('db', () => {
    // it('can read', () => {
    //     expect(db.read instanceof Function)
    // })
    // it('can write', () => {
    //     expect(db.write instanceof Function)
    // })
    afterEach(() => {
        fs.clearMocks()
    })

    // mock fs
    it('can read', async () => {
        // expect(fs.x()).toBe('xxx')
        const data = [{
            title: 'hi',
            done: true
        }]
        fs.setReadMock('/xxx', null, JSON.stringify(data))
        const list = await db.read('/xxx')
        expect(list).toStrictEqual(data)

    })



    it('can write', async () => {
        let fakeFile = ''
        fs.setWriteMock('/yyy', (path, data, callback) => {
            fakeFile = data
            callback(null)
        })
        const list = [{
            title: '123',
            done: true
        }, {
            title: '456',
            done: false
        }]
        await db.write(list, '/yyy')
        expect(fakeFile).toBe(JSON.stringify(list) + '\n')
    })
});