# LumAI API 文档

## 项目概述

LumAI API 是 LumAI 系统的后端 API 服务，基于 FastAPI 框架构建。该项目提供用户认证、会话管理和数据管理等核心功能。

## 技术栈

- **框架**: FastAPI - 现代化的 Python Web 框架
- **数据库**: MySQL (使用 aiomysql 异步驱动)
- **ORM**: SQLAlchemy (异步)
- **认证**: JWT (JSON Web Token)
- **密码加密**: bcrypt
- **服务器**: Uvicorn
- **数据验证**: Pydantic

## 项目结构

```
lumai-api/
├── requirements.txt        # 项目依赖
├── app/
│   ├── main.py            # 应用入口点
│   ├── core/
│   │   ├── config.py      # 配置管理
│   │   └── database.py    # 数据库连接
│   ├── api/
│   │   └── auth/
│   │       └── login.py   # 登录相关接口
│   ├── models/
│   │   └── user.py        # 用户数据模型
│   ├── schemas/
│   │   └── auth.py        # 认证相关数据类型定义
│   └── utils/
│       └── security.py    # 安全相关工具函数
```

## 主要模块说明

### 1. 核心模块 (`core/`)

#### config.py - 配置管理
配置应用的全局设置，通过环境变量注入：
- `PROJECT_NAME`: 项目名称
- `DATABASE_URL`: 数据库连接字符串 (MySQL)
- `SECRET_KEY`: JWT 密钥
- `ALGORITHM`: JWT 加密算法 (HS256)
- `ACCESS_TOKEN_EXPIRE_MINUTES`: 令牌过期时间 (30 分钟)

#### database.py - 数据库连接
管理异步数据库连接：
- 使用 SQLAlchemy 的异步引擎
- 提供 AsyncSession 用于异步数据库操作
- `get_db()` 依赖注入函数

### 2. 数据模型 (`models/`)

#### user.py - 用户模型
用户表的 ORM 定义：
- `id`: 用户 ID (主键)
- `email`: 邮箱 (唯一索引)
- `username`: 用户名 (唯一索引)
- `password_hash`: 密码哈希值
- `is_active`: 是否激活状态
- `created_at`: 创建时间

### 3. 数据类型定义 (`schemas/`)

#### auth.py - 认证相关
使用 Pydantic 定义的数据验证类：

- **UserLogin**: 登录请求
  - `email`: 邮箱
  - `password`: 密码

- **Token**: 令牌响应
  - `access_token`: JWT 令牌
  - `token_type`: 令牌类型 (bearer)

- **UserResponse**: 用户响应数据
  - `id`: 用户 ID
  - `email`: 邮箱
  - `username`: 用户名
  - `is_active`: 激活状态

### 4. API 路由 (`api/`)

#### auth/login.py - 认证接口

**POST /api/auth/login**
- **功能**: 用户登录
- **请求体**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **成功响应 (200)**:
  ```json
  {
    "access_token": "eyJhbGc...",
    "token_type": "bearer",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "username": "username",
      "is_active": true
    }
  }
  ```
- **错误响应 (401)**:
  - 用户不存在或密码错误
  - 用户账户已禁用

### 5. 安全工具 (`utils/`)

#### security.py - 密码和令牌管理

**函数**:
- `verify_password(plain_password, hashed_password)`: 验证密码
- `get_password_hash(password)`: 生成密码哈希
- `create_access_token(subject, expires_delta)`: 生成 JWT 令牌

## 快速开始

### 1. 环境设置

```bash
# 进入项目目录
cd lumai-api

# 创建虚拟环境 (可选)
python -m venv venv

# 激活虚拟环境
# Windows:
venv\Scripts\activate
# Unix/MacOS:
source venv/bin/activate

# 安装依赖
pip install -r requirements.txt
```

### 2. 环境配置

创建 `.env` 文件，配置以下变量：

```env
PROJECT_NAME=LumAI API
API_V1_STR=/api

# 数据库配置
DATABASE_URL=mysql+aiomysql://root:password@localhost/lumai_db

# JWT 配置
SECRET_KEY=your-super-secret-key-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### 3. 数据库初始化

运行以下命令创建数据表：

```bash
# 使用 SQLAlchemy 的 migration 工具 (需要配置 Alembic)
# 或手动执行 SQL:
# CREATE TABLE users (
#   id INT AUTO_INCREMENT PRIMARY KEY,
#   email VARCHAR(255) UNIQUE NOT NULL,
#   username VARCHAR(255) UNIQUE NOT NULL,
#   password_hash VARCHAR(255) NOT NULL,
#   is_active BOOLEAN DEFAULT TRUE,
#   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
# );
```

### 4. 启动服务

```bash
# 开发模式 (自动热重载)
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# 生产模式
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

API 将运行在 `http://localhost:8000`

## API 文档

启动服务后，可以访问以下地址查看交互式 API 文档：
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## 依赖说明

| 包名 | 版本 | 用途 |
|-----|-----|------|
| fastapi | 最新 | Web 框架 |
| uvicorn | 最新 | ASGI 服务器 |
| sqlalchemy | 最新 | ORM 和数据库工具 |
| aiomysql | 最新 | MySQL 异步驱动 |
| pydantic | 最新 | 数据验证 |
| pydantic-settings | 最新 | 配置管理 |
| pyjwt | 最新 | JWT 令牌 |
| passlib[bcrypt] | 最新 | 密码加密 |

## 认证流程

```
┌─────────┐
│ Client  │
└────┬────┘
     │ POST /api/auth/login
     │ { email, password }
     ▼
┌────────────────────────┐
│   FastAPI Application  │
│                        │
│  1. 查询数据库找用户   │
│  2. 验证密码          │
│  3. 检查用户状态      │
│  4. 生成 JWT 令牌     │
└────┬───────────────────┘
     │
     │ 200 OK
     │ { access_token, token_type, user }
     ▼
┌─────────┐
│ Client  │
│ (保存   │
│  token) │
└─────────┘
```

## 安全特性

- ✅ 密码使用 bcrypt 加密存储
- ✅ JWT 令牌签名验证
- ✅ 邮箱和用户名唯一约束
- ✅ 用户激活状态验证
- ✅ 令牌过期时间限制

## 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| PROJECT_NAME | 项目名称 | LumAI API |
| API_V1_STR | API 前缀 | /api |
| DATABASE_URL | 数据库连接 | mysql+aiomysql://user:password@localhost/lumai_db |
| SECRET_KEY | JWT 密钥 | YOUR_SUPER_SECRET_KEY_CHANGE_ME |
| ALGORITHM | JWT 加密算法 | HS256 |
| ACCESS_TOKEN_EXPIRE_MINUTES | 令牌过期分钟数 | 30 |

## 常见问题

### 1. 连接数据库失败
- 检查 MySQL 服务是否运行
- 确认数据库连接字符串是否正确
- 验证数据库用户权限

### 2. 密码验证失败
- 确保密码未被修改
- 检查是否使用了相同的 `SECRET_KEY`

### 3. 令牌过期
- 令牌有效期为 30 分钟
- 需要重新登录获取新令牌

## 未来扩展

- [ ] 添加用户注册接口
- [ ] 实现刷新令牌机制
- [ ] 添加用户信息修改接口
- [ ] 实现基于角色的访问控制 (RBAC)
- [ ] 添加更多业务 API 端点
- [ ] 集成日志记录系统
- [ ] 添加请求限流 (Rate Limiting)
- [ ] 实现 CORS 跨域配置

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

项目采用 LICENSE 文件中指定的许可证
