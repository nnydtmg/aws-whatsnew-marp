---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Elastic Beanstalk now supports TLS listeners for Network Load Balancers

**発表日: 2026年5月6日**

---

## 概要

AWS Elastic Beanstalkが、Network Load Balancer環境向けのTLSリスナーのサポートを開始いたしました。

### 主な特徴

- **SSL証明書の設定**: TLSリスナーでSSL証明書を構成可能
- **セキュリティポリシーの管理**: ロードバランサーで安全な接続を処理
- **トラフィック復号化**: ロードバランサーが復号化されたトラフィックをインスタンスに転送
- **マネージド設定**: Elastic Beanstalkコンソールまたはコマンドラインインターフェース（CLI）から直接設定可能

---

## 前提・背景

### これまでの課題

- AWS Elastic BeanstalkはNLB環境向けのTLSリスナーをマネージド設定オプションとしてサポートしていませんでした
- セキュアな通信が必要な場合、手動での設定や複雑な構成が必要でした

### 市場背景

- Network Load Balancerの利用が拡大
- セキュアな通信要件の増加
- 運用負担の軽減が求められている

---

## 主な機能と改善

### TLSリスナーの設定方法

- **Elastic Beanstalkコンソール**: ウェブUIから直感的に設定
- **CLI**: コマンドラインで自動化・スクリプト化に対応

### セキュリティ面での利点

- ロードバランサーレベルでのSSL/TLS終端
- セキュリティポリシーで暗号スイートを制御
- バックエンド通信の暗号化サポート

### 対応範囲

- すべてのAWSリージョン（Elastic BeanstalkとNetwork Load Balancersをサポートするリージョン）
- 既存のNLB環境への適用が可能

---

## 利用シナリオ

### こんなお客様に最適

- セキュアな通信が必要なアプリケーション運用
- Webサービス・API・マイクロサービス
- エンタープライズアプリケーション
- PCI-DSS等の規制対応が必要な環境

### 期待される効果

- セキュア設定の運用負担軽減
- SSL/TLS終端の一元化
- コンプライアンス対応の簡素化
- インスタンス側の計算負荷削減

---

## 効果・メリット

- ✅ **運用効率化**: マネージドなTLS設定で手作業を削減
- ✅ **セキュリティ強化**: ロードバランサーレベルでのセキュア通信実装
- ✅ **設定の柔軟性**: コンソール・CLI双方に対応
- ✅ **コスト削減**: インスタンス側のSSL処理負荷軽減
- ✅ **規制対応**: セキュリティポリシーによるコンプライアンス対応
- ✅ **スケーラビリティ**: 全リージョンで利用可能

---

## まとめ

### このアップデートの意義

AWS Elastic Beanstalkが、Network Load Balancer環境向けのTLSリスナーをネイティブサポートすることで、セキュアなアプリケーション運用がより簡単になります。

### 次のステップ

1. 自社のNLB環境での導入可能性を検討
2. AWS Elastic Beanstalk Developer Guideで設定方法を確認
3. テスト環境での検証
4. 本番環境への段階的展開

### 注目すべき点

- Elastic Beanstalkの運用性がさらに向上
- Network Load Balancerとの統合がより深くなる
- エンタープライズ向けの機能充実

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/elastic-beanstalk-tls-support/
- **Elastic Beanstalk Developer Guide - Configuring a Network Load Balancer**: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-nlb.html
- **Elastic Load Balancing Documentation - SSL Policies**: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html#tls-security-policies
- **Elastic Beanstalk Release Notes**: https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/relnotes-2026.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**