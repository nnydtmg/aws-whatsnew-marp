---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Backup improves performance for Amazon EKS cluster backups

Amazon EKSクラスターのバックアップ性能を最大10倍向上

**発表日: 2026年5月5日**

---

## 概要

### 3つの主要な改善点

- **最大10倍の高速化**: Amazon EKSクラスターのバックアップ性能を最大10倍向上
- **バックアップ時間の短縮**: 大規模クラスターのバックアップ時間が数日から数時間に短縮
- **コスト効率**: すべてのAWSリージョンで自動的に有効化、追加費用なし

---

## 前提・背景

### Kubernetes環境でのバックアップの課題

- 大規模なネームスペースとKubernetesリソースを持つクラスターのバックアップ時間が長期化
- 従来のバックアップ方式では数日を要するケースが存在
- ビジネス継続性とディザスタリカバリーの重要性が急速に高まる

### AWS Backupの進化

- ポリシーベースの統一的なデータ保護ソリューション
- Amazon EKSを含むマルチサービス対応
- エンタープライズグレードのバックアップ・リストア機能

---

## 変更内容・新機能

### バックアップパフォーマンスの大幅改善

- **クラスター状態バックアップが最大10倍高速化**
  - 大規模クラスターのバックアップウィンドウが劇的に短縮
  - 複数のネームスペースと膨大なKubernetesリソース対応

- **自動的に有効化される改善**
  - 追加構成不要
  - すべてのAWSリージョンで利用可能

### 適用範囲

- **対象サービス**: Amazon EKSクラスターのクラスター状態バックアップ
- **対応リージョン**: すべてのAWSコマーシャルリージョン
- **GovCloud対応**: AWS GovCloud (US) リージョンでも利用可能

---

## 効果・メリット

### 運用効率の向上

- **バックアップ時間の大幅短縮**: 数日から数時間へ
- **RPOとRTO の改善**: バックアップ完了までの時間短縮により、より頻繁なバックアップが可能
- **運用コストの削減**: バックアップ処理にかける時間とリソースの削減

### ビジネスメリット

- **大規模クラスター対応**: 数千のリソースを持つクラスターでも実用的な時間でバックアップ完了
- **追加費用なし**: 既存のAWS Backupユーザーが自動的に恩恵を受ける
- **統一管理**: コンピュート、ストレージ、データベースと統一されたバックアップポリシー

---

## ユースケース

### 主なユースケース

- **大規模Kubernetesクラスター運用**: 数千のPodと複数のワークロードを実行するミッションクリティカルなシステム
- **頻繁なバックアップが必要な環境**: 金融機関や医療機関など、コンプライアンス要件が厳しい組織
- **ディザスタリカバリー戦略**: 短い RPO/RTO 達成が必須な環境
- **クラスター移行・アップグレード**: 大規模クラスターのバージョンアップ時のバックアップ・リカバリー

---

## まとめ

### AWS Backup for Amazon EKSの位置づけ

- AWS Backupは、Amazon EKSに対する堅牢で効率的なデータ保護を提供
- 最大10倍の性能改善により、エンタープライズ環境での実用性が大幅に向上
- ポリシーベースの統一管理で、複数のAWSサービスを一括管理可能

### 次のステップ

1. 既存のAmazon EKSクラスターでAWS Backupの性能改善を確認
2. バックアップポリシーの見直し、より頻繁なバックアップの検討
3. 本番環境への段階的導入またはアップグレード

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-backup-amazon-eks-performance-improvement/
- **AWS Backup 製品ページ**: https://aws.amazon.com/backup/
- **AWS Backup 価格ページ**: https://aws.amazon.com/backup/pricing/
- **技術ドキュメント**: https://docs.aws.amazon.com/aws-backup/latest/devguide/eks-backups.html
- **AWS Backup コンソール**: https://console.aws.amazon.com/backup

### 関連トピック

- [AWS Backup adds logically air-gapped vault support for Amazon EKS](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-backup-logically-air-gapped-vault-amazon-eks/)
- [Amazon EKS enhances cluster governance with new IAM condition keys](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-iam-condition-keys/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**