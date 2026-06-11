---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Workload Credentials Provider で証明書とシークレットの管理を自動化

**発表日: 2026年6月11日**

---

## 概要

### 3つの主な特徴

- **証明書自動展開**: AWS Certificate Manager（ACM）からエクスポートされた証明書の展開を自動化
- **シークレット管理**: AWS Secrets Manager のシークレットをローカルキャッシュ
- **ハイブリッド対応**: AWS環境と非AWS環境の両方で動作

### 主な利点

- 証明書の有効期限管理を簡素化
- カスタムオートメーション（Amazon EventBridge）の複雑性を排除
- 単一プロバイダーで統一管理

---

## 前提・背景

### 市場の課題

- **公開証明書の有効期限短縮**: 認証局ブラウザフォーラム（CA/B）の要件により短期化
- **運用負荷の増加**: 有効期限短縮に伴う更新作業の頻度が増加
- **カスタム実装の複雑化**: Amazon EventBridgeを使用した証明書更新検出・展開ロジックの維持管理が困難

### AWS の対応

- 単一プロバイダーでシークレットと証明書を統一管理
- オープンソース化してコミュニティ利用を促進
- AWS Secrets Manager Agentとの後方互換性を確保

---

## 主な機能

### 1. 証明書自動展開機能

- **自動エクスポート**: ACM証明書を自動的にエクスポート
- **定期更新**: 証明書の有効期限切れ前に自動更新
- **障害防止**: サーバー再読み込み動作により無停止で証明書を更新

### 2. シークレット管理機能

- **ローカルキャッシング**: Secrets Manager のシークレットをクライアント側でキャッシュ
- **下位互換性**: AWS Secrets Manager Agent との完全な互換性を維持
- **セキュアな管理**: AWS認証情報を使用したセキュアなアクセス

### 3. マルチプラットフォーム対応

- **対応OS**: Windows、Linux
- **対応ウェブサーバー**: Apache、NGINX
- **環境**: AWS とオンプレミス両対応

---

## 設定方法

### 基本的な設定項目

```yaml
Certificate ARN: ACM証明書のARNを指定
File Path: 証明書を保存するファイルパス
Server Reload Behavior: サーバー再読み込みの動作方式
```

### 利用シーン

- E コマースサイトのSSL/TLS証明書管理
- ハイブリッドクラウド環境での統一管理
- マイクロサービスアーキテクチャでの認証情報配布

---

## 対応環境と利用可能性

### リージョン対応

- **リージョン**: すべてのAWSリージョンで利用可能
- **前提条件**: エクスポート可能なACM証明書と Secrets Manager

### オープンソース

- **ライセンス**: オープンソース
- **公開先**: GitHub（aws/aws-workload-credentials-provider）
- **開発社**: Amazon Web Services, Inc.

---

## まとめ

### AWS Workload Credentials Provider の位置づけ

- セキュリティ運用の効率化を実現
- ハイブリッド環境での統一管理を提供
- カスタム実装から脱却、運用負荷を削減

### 次のステップ

1. 現在の証明書管理体制を見直し
2. パイロットプロジェクトでの検証
3. 本番環境への段階的導入

---

## 参考リソース

### 公式ドキュメント・リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-workload-credentials-provider/
- **AWS Certificate Manager ドキュメント**: https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate-automation.html
- **GitHub リポジトリ**: https://github.com/aws/aws-workload-credentials-provider
- **AWS Secrets Manager ドキュメント**: https://docs.aws.amazon.com/secretsmanager/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**