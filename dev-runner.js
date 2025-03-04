#!/usr/bin/env node

import { fileURLToPath } from 'url'
import { dirname } from 'path'

// 获取当前文件所在目录，并切换工作目录
const __dirname = dirname(fileURLToPath(import.meta.url))
process.chdir(__dirname)

// 加载主入口文件
import('./index.ts')
