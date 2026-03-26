---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Route 53 Profiles
粒度の細かいIAM権限でアクセス管理を強化

**発表日: 2026年3月25日**

---

## 概要

### Route 53 Profiles の3つの主要な改善

- **粒度の細かいIAM権限**: リソースおよびVPC関連付けに対する細かい権限制御が可能
- **リソースタイプ別制御**: プライベートホストゾーン、Resolverルール、DNSファイアウォールルールグループごとに権限を定義
- **操作レベルの制限**: 関連付け、関連付け解除、更新など操作単位でのアクセス制御

### 権限定義の柔軟性

- リソースARN、ホストゾーン名、Resolverルールドメイン名に基づいて権限を定義
- DNSファイアウォールルールグループの優先度範囲で制御
- 特定のVPC関連付けに基づいた権限設定が可能

---

## 前提・背景

### DNS管理における課題

- DNS設定管理の責任を複数のチーム間で共有する必要性の高まり
- アクセス権限の粒度が粗く、セキュリティリスクが存在
- 組織全体でセキュリティとガバナンス標準を維持しながら責任を委任することの困難さ
- 不適切な権限委譲によるセキュリティ侵害のリスク

### 市場の動向

- エンタープライズ向けIAM制御の高度化が進展
- ゼロトラストセキュリティモデルへの移行が加速
- 最小権限の原則（Principle of Least Privilege）の重要性が増加
- マルチアカウント・マルチチーム環境でのアクセス管理の複雑化

---

## 主な機能と改善

### 1. リソースタイプ別の権限制御

**対応するリソースタイプ**
- プライベートホストゾーン関連付け
- Resolverルール
- DNSファイアウォールルールグループ

**制御可能な操作**
- 関連付け（Associate）
- 関連付け解除（Disassociate）
- 更新（Update）

### 2. 権限定義の柔軟な方法

<div class="columns">
<div>

**リソース単位**
- リソースARN
- ホストゾーン名
- Resolverルール ドメイン名

</div>
<div>

**VPC単位**
- 特定のVPC ID
- 優先度範囲

</div>
</div>

---

## 実装と管理方法

### Route 53 Profiles の構成要素

Route 53 Profilesは以下の標準DNS設定を定義し、複数のVPCに適用：
1. プライベートホストゾーン関連付け
2. Resolverルール
3. DNSファイアウォールルールグループ

### 共有方法

- **直接適用**: 複数のVPCに直接適用
- **クロスアカウント共有**: AWS Resource Access Manager（RAM）を使用して他のAWSアカウントと共有

---

## 効果・メリット

### セキュリティ面の効果

- **最小権限の実現**: ユーザーに必要最小限の権限のみを付与
- **セキュリティ侵害のリスク軽減**: 不適切な権限アクセスを防止
- **監査追跡の向上**: 細粒度のアクセス制御により監査が容易に

### ガバナンス面のメリット

- **責任の明確な委任**: 管理者が特定のリソースやVPCへのアクセスを委任可能
- **組織標準の維持**: セキュリティとガバナンス標準を組織全体で統一
- **チーム間の分業**: DNS設定管理の責任を複数チーム間で効果的に分配

### 運用の効率化

- **管理負荷の削減**: 管理者が詳細な権限管理に費やす時間を削減
- **スケーラビリティ**: 大規模な組織でも権限管理を効率的に運用可能

---

## ユースケース

### ケース1: マルチチーム DNS管理

**シナリオ**: 大規模企業で複数のチームがそれぞれのアプリケーション用DNS設定を管理

**実装**:
- 各チームに対して自チームのホストゾーン関連付けのみの権限を付与
- チーム間のアクセスは完全に隔離
- セキュリティガバナンスは一元管理

### ケース2: クロスアカウント環境での権限委譲

**シナリオ**: 複数のAWSアカウントで統一されたDNS設定を管理

**実装**:
- Route 53 Profiles を作成し、AWS RAMで他のアカウントと共有
- 各アカウントで細粒度のIAM権限を設定
- 本社側で組織標準を維持

---

## 利用可能なリージョンと料金

### 対応リージョン

- Route 53 Profilesが利用可能なすべてのAWSリージョンで利用可能
- **非対応**: 中東（バーレーン）および中東（UAE）

### 料金

- **追加料金なし**: 既存のRoute 53 Profiles顧客はこの機能を無料で利用可能

---

## まとめ

### Route 53 Profiles 粒度の細かいIAM権限の位置づけ

- AWSのセキュリティとガバナンス強化に向けた重要なアップデート
- 最小権限の原則を実装する強力なツール
- マルチチーム・マルチアカウント環境での権限管理が容易に

### 次のステップ

1. 自社の組織構造とDNS管理体制を分析
2. Route 53 Profiles の導入検討
3. IAM権限設計と実装
4. 段階的な本番環境への展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-route-53-profiles-granular-iam/
- **Using IAM policy conditions for fine-grained access control**: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/specifying-conditions-route53.html
- **Using identity-based policies (IAM policies) for Amazon Route 53**: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-managing-permissions.html
- **VPC permissions - Amazon Route 53**: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-vpc-permissions.html
- **Amazon Route 53 ドキュメント**: https://docs.aws.amazon.com/route53/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
