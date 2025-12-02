# ![LumAI Logo](https://raw.githubusercontent.com/colinwps/lumai/main/docs/logo.png) LumAI

[中文版本](#中文说明) | [English Version](#english-version)

---

## English Version

### Overview

LumAI is an AI workflow and agent platform that allows users to build, manage, and deploy AI applications with ease. It integrates LLMs, vector databases, and workflow editors, providing a modern dashboard interface.

### Features

* Multi-tenant dashboard for managing AI applications
* LLM and external AI provider integration
* Document and dataset management with vector search
* Workflow editor with React Flow
* Real-time chat applications
* User and team management with role-based access
* Analytics and usage tracking
* Internationalization support (i18n)

### Architecture

![LumAI Architecture](https://raw.githubusercontent.com/colinwps/lumai/main/docs/architecture.png)

> Diagram: Frontend (Next.js) ↔ Backend (FastAPI) ↔ Database (PostgreSQL + PgVector + Redis)

### Tech Stack

* **Frontend**: Next.js (App Router) + TypeScript + TailwindCSS + shadcn/ui + lucide-react
* **Backend**: Python FastAPI + PostgreSQL + SQLAlchemy + JWT + bcrypt
* **Databases**: PostgreSQL + PgVector (vector DB) + Redis (cache & queue)
* **Tools**: Docker, Docker Compose, Zod, React Flow

### Quick Start

#### Prerequisites

* Node.js >= 18
* Python >= 3.11
* Docker & Docker Compose

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

Access: `http://localhost:3000`

#### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Access: `http://localhost:8000`

#### Docker Compose (Full Stack)

```bash
docker-compose up -d
```

### API Quick Example

```ts
// Frontend: libs/api/auth.ts
import axios from "axios";

export async function login(email: string, password: string) {
  const res = await axios.post("/api/auth/login", { email, password });
  return res.data;
}

// Usage in React
const handleLogin = async () => {
  try {
    const data = await login(email, password);
    console.log("Logged in user:", data.user);
  } catch (err) {
    console.error("Login failed:", err);
  }
};
```

---

## 中文说明

### 项目概述

LumAI 是一个 AI 工作流与智能代理平台，用户可以轻松创建、管理和部署 AI 应用。平台集成 LLM、向量数据库及工作流编辑器，提供现代化仪表盘界面。

### 功能

* 多租户 AI 应用管理仪表盘
* LLM 和外部 AI Provider 集成
* 文档与数据集管理，支持向量检索
* 基于 React Flow 的工作流编辑器
* 实时对话应用
* 用户和团队管理，支持角色权限
* 调用统计和分析
* 国际化支持（i18n）

### 架构示意

![LumAI 架构图](https://raw.githubusercontent.com/colinwps/lumai/main/docs/architecture.png)

> 前端 (Next.js) ↔ 后端 (FastAPI) ↔ 数据库 (PostgreSQL + PgVector + Redis)

### 技术栈

* **前端**：Next.js (App Router) + TypeScript + TailwindCSS + shadcn/ui + lucide-react
* **后端**：Python FastAPI + PostgreSQL + SQLAlchemy + JWT + bcrypt
* **数据库**：PostgreSQL + PgVector（向量数据库）+ Redis（缓存/队列）
* **工具**：Docker, Docker Compose, Zod, React Flow

### 快速启动

#### 前置条件

* Node.js >= 18
* Python >= 3.11
* Docker & Docker Compose

#### 前端

```bash
cd frontend
npm install
npm run dev
```

访问: `http://localhost:3000`

#### 后端

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

访问: `http://localhost:8000`

#### Docker Compose（整套服务启动）

```bash
docker-compose up -d
```

### API 快速示例

```ts
// 前端: libs/api/auth.ts
import axios from "axios";

export async function login(email: string, password: string) {
  const res = await axios.post("/api/auth/login", { email, password });
  return res.data;
}

// React 使用示例
const handleLogin = async () => {
  try {
    const data = await login(email, password);
    console.log("登录用户:", data.user);
  } catch (err) {
    console.error("登录失败:", err);
  }
};
```

### License

This project is licensed under the Apache-2.0 License.
Author: Colinwps
Project: [https://github.com/colinwps/lumai](https://github.com/colinwps/lumai)
