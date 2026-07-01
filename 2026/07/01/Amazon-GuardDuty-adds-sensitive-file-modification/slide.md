---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon GuardDutyで機密ファイル修正の脅威検知が可能に

**発表日: 2026年7月1日**

---

## 概要

### 何が新しくなったか

- Amazon GuardDuty Runtime Monitoringに3つの新しい脅威検知機能が追加
- EC2インスタンスおよびEKS/ECS上のコンテナワークロードで機密ファイル修正を検知
- 攻撃後の悪意のある活動をMITRE ATT&CK戦術にマッピングして識別

### 検知対象

- **Persistence:Runtime/SensitiveFileModified** - 永続的なアクセス維持
- **PrivilegeEscalation:Runtime/SensitiveFileModified** - 権限昇格の試み
- **DefenseEvasion:Runtime/SensitiveFileModified** - 検知回避の試み

---

## 前提・背景

### 現在の課題

- クラウド環境における運用環境での脅威検知の困難さ
- 設定ファイルやシステムログの改ざん検知の遅延
- 誤検知による運用チームへの負担増加
- 攻撃チェーンの全体像把握の難しさ

### GuardDuty Runtime Monitoringの進化

- 従来: EKS環境に限定した検知
- **新展開**: EC2、ECS、EKSへの統一された検知機能
- 相関分析による誤検知削減機能の強化

---

## 主な機能

### 監視対象ファイルと操作

#### 監視対象ファイルの例

- 設定ファイル（/etc/配下）
- 認証設定（SSHキー、Sudoers設定など）
- システムログ（/var/log配下）
- ライブラリとバイナリ

#### 監視対象操作（5種類）

- **open-for-write** - ファイルの書き込みオープン
- **rename** - ファイル名変更
- **symlink** - シンボリックリンク作成
- **link** - ハードリンク作成
- **unlink** - ファイル削除

---

## 主な機能（続き）

### インテリジェント分析機能

- **相関分析**: 正当な管理操作と悪意のある動作を自動区別
- **MITRE ATT&CK マッピング**: 攻撃戦術と関連付けて詳細なコンテキスト提供
- **修復推奨事項**: 検知後の対応方法を自動提示
- **難読化技術対応**: 複雑な攻撃技法も検知可能

---

## 効果・メリット

### セキュリティ強化

- 永続的なアクセス維持を早期に検知・ブロック
- 権限昇格攻撃への即時対応が可能
- 検知エンジンの回避試みを識別

### 運用効率化

- 誤検知の削減により対応負荷を軽減
- 自動的な修復推奨事項により対応時間を短縮
- 統一されたダッシュボードで一元管理

### コスト効率

- 新規ユーザーに30日間の無料試用期間を提供
- 既存GuardDuty ユーザーはすぐに利用可能
- スケーラブルな料金体系

---

## 対象ユースケース

### 推奨される利用シーン

#### セキュリティチーム向け

- 脅威検知と対応の自動化
- セキュリティ侵害の早期検知

#### DevSecOps専門家向け

- CI/CDパイプラインのセキュリティ検証
- コンテナイメージの脅威検知

#### クラウドセキュリティアーキテクト向け

- AWS計算環境全体の包括的な脅威可視化
- セキュリティ体制の統一化

---

## 利用可能な環境

### 対応プラットフォーム

- **Amazon EC2** - 仮想マシンワークロード
- **Amazon EKS** - Kubernetesコンテナ
- **Amazon ECS** - マネージドコンテナ

### 前提条件

- GuardDuty Runtime Monitoringが有効化されていること
- 対応するランタイムが導入されていること

### 利用開始方法

1. AWS コンソールでGuardDutyに移動
2. Runtime Monitoring設定で新しい検知機能を有効化
3. 対象リソースを指定してデプロイ

---

## まとめ

### 主なポイント

- Amazon GuardDuty Runtime Monitoringが機密ファイル修正の脅威検知機能を拡大
- EC2、EKS、ECS環境で統一された脅威検知が可能に
- インテリジェントな分析により誤検知を削減
- MITRE ATT&CK戦術マッピングで対応をサポート

### 次のステップ

1. 現在のセキュリティ体制を評価
2. パイロットプロジェクトで機能検証
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-sfm/
- **GuardDuty ドキュメント**: https://docs.aws.amazon.com/guardduty/
- **Runtime Monitoring ドキュメント**: https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html
- **GuardDuty リリース情報**: https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring-agent-release-history.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**