---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch が Amazon CloudFront ログと 3 つのリソースタイプに対応

自動有効化機能の拡張

**発表日: 2026年4月2日**

---

## 概要

### CloudWatch 自動有効化機能の拡張

- **CloudFront 標準アクセスログ** - 自動有効化対応
- **Security Hub CSPM ファインディングログ** - 自動有効化対応
- **Bedrock AgentCore メモリ・ゲートウェイログ** - 自動有効化対応
- **Bedrock AgentCore トレース** - 自動有効化対応

### 主なメリット

- 手動設定なしで一貫性のあるモニタリングカバレッジを確保
- 組織全体またはアカウント単位で自動的にテレメトリ収集を設定
- 運用効率の向上とセキュリティ体制の強化

---

## 前提・背景

### これまでの課題

- 複数のリソースタイプから生成されるログを個別に設定
- 新規リソース作成時に手動でログ有効化が必要
- 組織全体の一貫性のあるモニタリング設定が困難
- ログ設定漏れによるセキュリティリスク

### 市場の動向

- クラウド環境のセキュリティ監視重要性の増加
- 自動化による運用負荷削減のニーズ拡大
- CloudWatch との統合を求める声の高まり

---

## 主な機能

### 自動有効化ルール

- **スコープ設定**: 組織全体、特定のアカウント、リソースタグ単位で指定
- **対象範囲**: 既存リソースと新規作成リソース両方に対応
- **管理方法**: 単一ルールで複数のリソースタイプをカバー

### サポートされるリソースタイプ

| リソースタイプ | 有効化ルールレベル |
|------------|-------------|
| CloudFront アクセスログ | 組織全体 |
| Security Hub CSPM ファインディング | 組織全体 |
| Bedrock AgentCore メモリ | アカウント |
| Bedrock AgentCore ゲートウェイテレメトリ | アカウント |

---

## 実装パターン

### 使用例 1: 中央セキュリティチーム

```
組織全体のルール作成
　↓
すべてのアカウントの CloudFront & Security Hub ログ
　↓
CloudWatch Logs に自動送信
```

### 使用例 2: 特定アカウントの Bedrock 監視

```
アカウントレベルのルール
　↓
Bedrock AgentCore メモリ & ゲートウェイテレメトリ
　↓
CloudWatch Logs に自動集約
```

---

## 効果・メリット

- **運用効率**: 手動設定作業が不要になり、ログ設定漏れを防止
- **一貫性**: 組織全体で統一されたモニタリングカバレッジを実現
- **スケーラビリティ**: 新規リソース作成時に自動的にログ有効化
- **セキュリティ**: CloudFront アクセスログと Security Hub 所見を一元管理
- **可視性**: 複数のリソースタイプのテレメトリを集約して監視

---

## 利用可能性

### リージョン対応

- **全 AWS コマーシャルリージョン**: 対応完了

### 料金

- **CloudWatch ログ取り込み**: CloudWatch 標準料金に基づいて課金
- 追加コストなし（取り込まれたログ量に応じた従量課金）

---

## ユースケース

### セキュリティ運用センター (SOC)

- 組織全体の CloudFront アクセスログを中央で監視
- Security Hub のセキュリティ所見を一元化
- アラートと分析を自動化

### AI アプリケーション監視

- Bedrock AgentCore メモリログで AI エージェントの動作を追跡
- ゲートウェイテレメトリでパフォーマンスを監視
- デバッグと最適化に活用

---

## まとめ

### CloudWatch 自動有効化拡張のポイント

1. **CloudFront、Security Hub、Bedrock AgentCore** がサポート対象に追加
2. **組織全体とアカウント** 両レベルのスコープに対応
3. **手動設定が不要** - 運用負荷を大幅削減
4. **全 AWS コマーシャルリージョン** で即座に利用可能

### 推奨される次のステップ

1. 現在のログ収集状況を確認
2. 自動有効化ルールの設計・策定
3. パイロット環境での実装と検証
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-cloudfront-enablement/
- **Amazon CloudWatch + Security Hub**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_and_Security_Hub.html
- **Amazon CloudWatch ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **関連アナウンス (2026年3月)**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-securityhub-findings/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**