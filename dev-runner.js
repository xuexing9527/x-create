#!/usr/bin/env node

import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { existsSync, symlinkSync, chmodSync } from 'fs'
import { execSync } from 'child_process'

// 获取当前目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// 设定项目根目录
const projectRoot = resolve(__dirname)
console.log(projectRoot)

// 切换到项目根目录，确保相对路径正确
process.chdir(projectRoot)

// 确保 `bin` 入口文件指向 `tsx` 运行的 `index.ts`
const binPath = resolve(projectRoot, '.bin/x-create')

if (!existsSync(binPath)) {
  console.log('🔧 Creating x-create bin...')
  symlinkSync(resolve(projectRoot, 'dev-runner.js'), binPath, 'file')
  chmodSync(binPath, '755') // 赋予可执行权限
}

// 直接运行 `index.ts`
execSync('npx tsx index.ts', { stdio: 'inherit' })
