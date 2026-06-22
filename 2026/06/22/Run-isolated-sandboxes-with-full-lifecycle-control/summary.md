# AWS Lambda MicroVMsで完全なライフサイクル管理を備えた分離サンドボックスを実行

Run isolated sandboxes with full lifecycle control: AWS Lambda introduces MicroVMs

**カテゴリ:** AWS Blog  
**公開日:** 2026年6月22日  
**元記事:** [AWS Blog](https://aws.amazon.com/blogs/aws/run-isolated-sandboxes-with-full-lifecycle-control-aws-lambda-introduces-microvms/)

---

## 📌 概要

AWS Lambda MicroVMsは、Firecrackerテクノロジーを活用した新しいサーバーレスコンピュート機能です。ユーザーやAIが生成したコードを仮想マシンレベルのアイソレーションで安全に実行でき、ほぼ瞬時の起動と状態保持が可能です。

---

## 🎯 このアップデートで何が変わったか

### 3つの主要機能

1. **仮想マシンレベルのアイソレーション**
   - Firecrackerテクノロジーによる完全な分離
   - 専用カーネル、リソース共有なし
   - 信頼できないコード実行に対応

2. **ほぼ瞬時の起動と再開**
   - スナップショットベースの高速起動（~125ms）
   - アイドル時の自動一時停止
   - 次のリクエストで自動復帰

3. **環境ライフサイクルの直接制御**
   - 最大8時間の実行時間
   - メモリ・ディスク・プロセス状態を保持
   - 自動または手動での一時停止制御

---

## 🔧 技術仕様

### リソース制限

| 項目 | 仕様 |
|------|------|
| 最大実行時間 | 8時間 |
| CPU | 最大16vCPU |
| メモリ | 最大32GB |
| ディスク | 最大32GB |
| アーキテクチャ | ARM64 |

### 利用可能リージョン

- 🇺🇸 US East (N. Virginia, Ohio)
- 🇺🇸 US West (Oregon)
- 🇪🇺 Europe (Ireland)
- 🇯🇵 Asia Pacific (Tokyo)

---

## 📊 使用フロー

### Step 1: MicroVM イメージの作成

```bash
aws lambda-microvms create-microvm-image \
  --code-artifact uri=s3://bucket/artifact.zip \
  --name my-image \
  --base-image-arn arn:aws:lambda:us-east-1:aws:microvm-image:al2023-1 \
  --build-role-arn <IAM role ARN>
```

**処理内容:**
- Dockerfileを実行
- アプリケーションを初期化
- メモリ・ディスク状態をスナップショット
- CloudWatchにビルドログ保存

### Step 2: MicroVM の起動

```bash
aws lambda-microvms run-microvm \
  --image-identifier arn:aws:lambda:<region>:<acct>:microvm-image:my-image \
  --execution-role-arn arn:aws:iam::<acct>:role/MicroVMExecutionRole \
  --idle-policy '{"maxIdleDurationSeconds":900,"autoResumeEnabled":true}'
```

**結果:**
- MicroVMに一意のIDを割り当て
- 専用エンドポイントURLを提供
- スナップショットから復帰

### Step 3: トラフィック送信

```bash
# 認証トークン取得
TOKEN=$(aws lambda-microvms get-auth-token --microvm-id <id>)

# HTTPSリクエスト
curl -H "X-aws-proxy-auth: $TOKEN" https://<endpoint>/
```

---

## 🎯 主なユースケース

### 1. AIコーディングアシスタント
- AIが生成したコードを安全に実行・検証
- 各ユーザーセッションに独立した環境
- リアルタイムの実行結果提供

### 2. インタラクティブコード環境
- Jupyter Notebookスタイルの体験
- セッション間でメモリ・ディスク状態を保持
- 複数の実行結果を連鎖的に処理

### 3. データ分析プラットフォーム
- ユーザー提供SQLやPythonの実行
- 信頼できないコードの完全隔離
- 数時間の長時間実行に対応

### 4. 脆弱性スキャナー
- ユーザー提供スクリプトの実行
- 悪意あるコードへの対策
- スキャン結果の自動収集

### 5. ゲームサーバー
- ユーザー提供スクリプト実行
- 他ユーザーへの影響を完全排除
- リアルタイムゲームロジック処理

---

## 💡 効果・メリット

### パフォーマンス面
- ✅ 仮想マシン並みの強力なアイソレーション
- ✅ コンテナより高速な起動（~125ms）
- ✅ FaaSより柔軟な状態保持機能

### 運用面
- ✅ 複雑な仮想化技術の専門知識不要
- ✅ 数千のMicroVMを同時運用可能
- ✅ Firecracker: 月15兆回以上のLambda呼び出しを支持

### セキュリティ面
- ✅ カーネルレベルの完全隔離
- ✅ 他セッションへの影響ゼロ
- ✅ マルチテナント環境での信頼できないコード実行に対応

### コスト面
- ✅ アイドル時は大幅にコスト削減
- ✅ 自動一時停止・復帰で効率運用
- ✅ 按量課金モデル

---

## 🔄 コンピュート選択肢の比較

### Lambda Functions vs Lambda MicroVMs vs EC2

| 項目 | Lambda Functions | Lambda MicroVMs | EC2 |
|------|------------------|------------------|-----|
| 実行モデル | イベント駆動 | セッション指向 | 長期実行 |
| 実行時間 | 秒単位 | 数分～8時間 | 無制限 |
| ステート | ステートレス | ステートフル | フル管理 |
| 起動時間 | ~100ms | ~125ms | 分単位 |
| アイソレーション | 低（プロセス） | 高（カーネル） | 最高（独立マシン） |
| コスト | 低 | 中 | 高 |
| スケーリング | 自動 | 自動 | 手動 |

---

## 🚀 今後の展開

### 適用シーン

1. **AIエージェント**
   - 複数ステップの推論処理
   - 状態保持が必要な長期処理

2. **クラウド開発環境**
   - VSCode ServerやJupyter統合
   - リアルタイムコード実行

3. **エンタープライズワークフロー**
   - 金融分析
   - サイバーセキュリティ
   - コンピュータ操作自動化

---

## 📚 参考リンク

### 公式ドキュメント
- [AWS Lambda MicroVMs 製品ページ](https://aws.amazon.com/lambda/lambda-microvms)
- [開発者ガイド](https://docs.aws.amazon.com/lambda/latest/dg/lambda-microvms-guide.html)
- [AWS Lambda 料金ページ](https://aws.amazon.com/lambda/pricing/)

### 関連技術
- [Firecracker Project](https://firecracker-microvm.github.io/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/)

### 元ブログ記事
- [Run isolated sandboxes with full lifecycle control: AWS Lambda introduces MicroVMs](https://aws.amazon.com/blogs/aws/run-isolated-sandboxes-with-full-lifecycle-control-aws-lambda-introduces-microvms/)

---

## 📝 補足

### 対象ユーザー

- ✅ AIコーディング環境の開発者
- ✅ マルチテナントアプリケーション構築者
- ✅ 信頼できないコード実行が必要な企業
- ✅ インタラクティブコンピューティングプラットフォーム構築者
- ✅ 複雑な仮想化技術の導入を避けたい開発チーム

### 重要なポイント

- Lambda MicroVMsとLambda Functionsは補完関係
- MicroVMsはイベント駆動ワークロード用ではない
- Firecrackerの実運用実績が信頼性の根拠
- セッション指向のワークロードに特化

---

**最終更新:** 2026年6月22日  
**ステータス:** 一般提供中（4リージョンで利用可能）