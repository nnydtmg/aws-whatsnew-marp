---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lambda MicroVMsで完全なライフサイクル管理を備えた分離サンドボックスを実行

Firecrackerテクノロジーで仮想マシンレベルのアイソレーションと高速起動を実現

**発表日: 2026年6月22日**

---

## 概要

### AWS Lambda MicroVMsの3つの主要機能

- **仮想マシンレベルのアイソレーション**: Firecrackerテクノロジーによる完全な分離
- **ほぼ瞬時の起動と再開**: スナップショットベースの快速起動
- **環境ライフサイクルの直接制御**: メモリ・ディスク状態の保持と制御が可能

### なぜMicroVMsが必要か

- AIが生成したコード、ユーザー提供スクリプトを安全に実行
- 信頼できないコードの実行に強力なアイソレーションが必須
- マルチテナント環境での完全な分離が求められる

---

<!-- _class: section -->

# 背景と課題

なぜAWS Lambda MicroVMsが必要とされるのか

---

## 前提・背景

### 従来の選択肢の課題

**仮想マシン（VM）:**
- 起動に数分を要する
- 強力なアイソレーション
- コスト効率が低い

**コンテナ:**
- 秒単位での起動
- 共有カーネルアーキテクチャ
- 信頼できないコード実行には追加の強化が必要

**Function as a Service (FaaS):**
- イベント駆動・リクエスト-レスポンスに最適化
- インタラクティブセッションに不向き
- 状態保持の仕組みが限定的

### マルチテナントアプリケーションの要求

- AIコーディングアシスタント
- インタラクティブコード実行環境
- データ分析プラットフォーム
- 脆弱性スキャナー
- ユーザー提供スクリプト実行

各エンドユーザーに専用の隔離実行環境が必要

---

<!-- _class: section -->

# 主な機能と特徴

AWS Lambda MicroVMsが提供する機能

---

## 主な機能 - 3つの柱

### 1. 仮想マシンレベルのアイソレーション

- Firecrackerテクノロジー活用
- 専用カーネルによる完全な分離
- セッション間でのリソース共有なし
- 信頼できないコードの実行に対応

**ポイント:** 他のユーザーのコード実行に影響を受けない

### 2. 高速起動と再開

- **起動方式**: イメージベース→起動
- **スナップショット機構**: 事前初期化済み状態をスナップショット
- **起動時間**: ほぼ瞬時（125ms以下）
- **アイドル時**: 自動的に一時停止
- **再開**: 次のリクエストで自動復帰

**ポイント:** GiB単位のセッションも素早く復帰

### 3. ライフサイクル管理

- **実行時間**: 最大8時間
- **メモリ**: 32GB
- **CPU**: 最大16vCPU
- **ディスク**: 32GB
- **状態保持**: メモリ・ディスク・プロセス全て保持
- **一時停止**: 自動または手動で制御可能

---

## 技術仕様

### MicroVMイメージの作成フロー

1. **Dockerfile + コード準備**
   - アプリケーションとDockerfileをzip形式で用意

2. **イメージビルド**
   - AWSがDockerfileを実行
   - アプリケーションを初期化
   - メモリ・ディスク状態をスナップショット取得

3. **イメージ保存**
   - CloudWatchにビルドログ保存
   - ARNとバージョン番号を発行

### MicroVM起動の流れ

```bash
aws lambda-microvms run-microvm \
  --image-identifier arn:aws:lambda:<region>:<acct>:microvm-image:my-image \
  --execution-role-arn arn:aws:iam::<acct>:role/MicroVMExecutionRole \
  --idle-policy '{"maxIdleDurationSeconds":900,...}'
```

**結果:**
- MicroVMに一意のIDを割り当て
- 専用エンドポイントURLを提供
- スナップショットから復帰、即座に実行可能

---

## アイドル・一時停止ポリシー

### 自動一時停止の設定

```json
{
  "maxIdleDurationSeconds": 900,        // 15分のアイドルで一時停止
  "suspendedDurationSeconds": 300,      // 5分の一時停止保持期間
  "autoResumeEnabled": true              // 次のリクエストで自動復帰
}
```

### コスト削減のメリット

- **実行状態**: フルコスト
- **一時停止状態**: 大幅コスト削減
- **自動復帰**: クライアント側は気付かない

**ユースケース別実行時間:**
- 脆弱性スキャン: 数分
- データ分析: 数時間
- インタラクティブセッション: 可変（最大8時間）

---

## 利用可能なリージョン

### 提供地域と仕様

| リージョン | ステータス | アーキテクチャ |
|-----------|----------|-------------|
| US East (N. Virginia, Ohio) | 利用可能 | ARM64 |
| US West (Oregon) | 利用可能 | ARM64 |
| Europe (Ireland) | 利用可能 | ARM64 |
| Asia Pacific (Tokyo) | 利用可能 | ARM64 |

**その他の地域:** 段階的に拡大予定

---

<!-- _class: section -->

# ユースケースと効果

実際のアプリケーション例

---

## 主なユースケース

### 1. AIコーディングアシスタント

- AIが生成したコードを安全に実行・検証
- 各ユーザーセッションに独立した環境
- 生成コードの実行結果をリアルタイム提供

### 2. インタラクティブコード環境

- Jupyter NotebookやVS Code Server的な体験
- セッション間でメモリ・ディスク状態を保持
- 複数の実行結果を連鎖的に処理可能

### 3. データ分析プラットフォーム

- ユーザーが提供したSQLやPython実行
- 信頼できないコードの完全隔離
- 数時間の長時間実行に対応

### 4. 脆弱性スキャナー

- ユーザー提供スクリプトの実行
- 悪意あるコードへの対策
- スキャン結果の収集と分析

### 5. ゲームサーバー

- ユーザー提供スクリプト実行
- 他ユーザーへの影響を完全排除
- リアルタイムゲームロジック処理

---

## 効果・メリット

### パフォーマンス

- ✅ 仮想マシンと同等の強力なアイソレーション
- ✅ コンテナより高速な起動（~125ms）
- ✅ FaaSより柔軟な状態保持

### 運用効率

- ✅ 複雑な仮想化技術の専門知識不要
- ✅ スケーラビリティ: 数千のMicroVMを同時運用可能
- ✅ Firecrackerの運用実績: 月15兆回以上のLambda呼び出しを支持

### セキュリティ

- ✅ カーネルレベルの完全隔離
- ✅ 他セッションへの影響ゼロ
- ✅ マルチテナント環境での信頼できないコード実行に対応

### コスト

- ✅ アイドル時は大幅にコスト削減
- ✅ 自動一時停止・復帰で効率運用
- ✅ 按量課金モデル

---

## Lambda MicroVMsと他のコンピュート選択肢

<div class="columns-3">
<div>

### Lambda Functions

- イベント駆動型
- 秒単位実行
- ステートレス
- 低コスト
- 高スケーリング

**用途:**
API、データ処理

</div>
<div>

### Lambda MicroVMs

- セッション指向
- 数分～8時間
- ステートフル
- 中程度コスト
- セッション単位スケーリング

**用途:**
隔離コード実行

</div>
<div>

### EC2

- 汎用コンピュート
- 長時間実行
- フルコントロール
- 高コスト
- 手動管理

**用途:**
永続インスタンス

</div>
</div>

---

<!-- _class: section -->

# 実装例とまとめ

実際の使用方法と今後のステップ

---

## 実装例: Flask アプリ

### サンプルアプリケーション

**app.py:**
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify(message="Hello, World!")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

**Dockerfile:**
```dockerfile
FROM public.ecr.aws/lambda/microvms:al2023-minimal
RUN dnf install -y python3 python3-pip && dnf clean all

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py .

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
```

---

## 導入ステップ

### 1. MicroVMイメージの作成

```bash
aws lambda-microvms create-microvm-image \
  --code-artifact uri=s3://my-bucket/app.zip \
  --name my-app-image \
  --base-image-arn arn:aws:lambda:us-east-1:aws:microvm-image:al2023-1 \
  --build-role-arn arn:aws:iam::123456789012:role/BuildRole
```

### 2. MicroVMの起動

```bash
aws lambda-microvms run-microvm \
  --image-identifier arn:aws:lambda:us-east-1:123456789012:microvm-image:my-app-image \
  --execution-role-arn arn:aws:iam::123456789012:role/MicroVMExecutionRole \
  --idle-policy '{"maxIdleDurationSeconds":900}'
```

### 3. トラフィック送信

```bash
# 認証トークン取得
TOKEN=$(aws lambda-microvms get-auth-token --microvm-id <id>)

# HTTPS リクエスト送信
curl -H "X-aws-proxy-auth: $TOKEN" https://<microvm-endpoint>/
```

---

## まとめ

### AWS Lambda MicroVMsの位置づけ

✅ **新しい選択肢**
- 仮想マシンとFaaSのギャップを埋める
- マルチテナント環境での信頼できないコード実行に最適

✅ **実運用での実績**
- Firecracker: 月15兆回以上のLambda呼び出しを支持
- AWS内での広範な採用実績

✅ **開発効率**
- 複雑な仮想化技術の専門知識不要
- シンプルなAPI with ライフサイクル制御

### 次のステップ

1. **AWS Lambda コンソール** で Lambda MicroVMs にアクセス
2. **パイロットプロジェクト** で小規模ユースケースから開始
3. **本番環境** への段階的展開

### 利用開始

- 🌍 利用可能リージョン: US East (2箇所)、US West、Europe (Ireland)、Asia Pacific (Tokyo)
- 📊 スケーリング: 数千のMicroVMを並行運用
- 💰 価格: AWS Lambda 価格ページで確認

---

## 参考リソース

### 公式情報

- **AWS Lambda MicroVMs 製品ページ**: https://aws.amazon.com/lambda/lambda-microvms
- **元ブログ記事**: https://aws.amazon.com/blogs/aws/run-isolated-sandboxes-with-full-lifecycle-control-aws-lambda-introduces-microvms/
- **開発者ガイド**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-microvms-guide.html
- **Lambda 料金ページ**: https://aws.amazon.com/lambda/pricing/

### 関連技術

- **Firecracker Project**: https://firecracker-microvm.github.io/
- **AWS Lambda**: https://aws.amazon.com/lambda/
- **Amazon CloudWatch**: https://aws.amazon.com/cloudwatch/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**