---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Private CA
カスタマー管理権限による
クロスアカウント共有に対応

**発表日: 2026年4月9日**

---

## 概要

### AWS Private CA の主な変更点

- **カスタマー管理権限**: AWS RAMでカスタマー管理権限をサポート
- **柔軟なアクセス制御**: 必要なAPIオペレーションのみを選択的に許可
- **PKIの一元化**: 複数アカウント間での安全な認証局共有が可能

### 実現できること

- 各消費アカウント別に異なるアクセス権限を設定
- 組織単位でのアクセス制御
- 不要なAPIオペレーションへのアクセスを完全に遮断

---

## 前提・背景

### これまでの課題

**AWS管理権限の制限**
- 事前定義されたアクションセットのみが利用可能
- クロスアカウント発行者は特定の証明書テンプレートに制限
- きめ細かいアクセス制御ができない

### PKI一元化の必要性

- 複数のAWSアカウント間での証明書管理の複雑化
- アカウントごとに個別CAを構築するコスト増加
- セキュリティポリシーの統一が困難

---

## 主な機能と改善

### 1. カスタマー管理権限

読み取りオペレーション
- **DescribeCertificateAuthority**: CA情報の取得
- **GetCertificate**: 証明書の取得
- **GetCertificateAuthorityCertificate**: CA証明書の取得

書き込みオペレーション
- **IssueCertificate**: 証明書の発行
- **RevokeCertificate**: 証明書の失効

---

### 2. アクセス制御の柔軟性

<div class="columns">
<div>

#### 従来のAWS管理権限

- 固定されたアクション
- テンプレート制限あり
- カスタマイズ不可

</div>
<div>

#### 新しいカスタマー管理権限

- 必要なオペレーションのみ選択
- テンプレート制限なし
- 完全にカスタマイズ可能

</div>
</div>

---

### 3. きめ細かいアクセス管理

**消費アカウント別の制御**
- 開発アカウント: 読み取り権限のみ
- 本番アカウント: 発行・失効権限

**組織単位での制御**
- 特定のOU(Organization Unit)に対してのみ共有
- 部門別アクセス権限の設定

---

## 利用可能な地域

### グローバル対応

- AWS Private CAが利用可能なすべてのAWSリージョン
- AWS RAMが利用可能なすべてのAWSリージョン
- リージョン間での制限なし

---

## ユースケース

### 1. エンタープライズPKI管理

- 中央のPKAで全社のCA管理
- 部門ごとに異なるアクセス権限を付与
- コンプライアンス要件を満たすアクセス制御

### 2. マイクロサービス環境

- サービスごとのアカウント分離
- 必要な権限のみを各サービスに付与
- セキュリティの最小権限の原則を実現

### 3. マルチテナント環境

- テナント別アカウントでの安全な管理
- テナントごとに異なるアクセスレベル
- カスタマイズされたセキュリティポリシー

---

## メリット・効果

### セキュリティ向上

- **最小権限の原則**: 必要な権限のみを付与
- **リスク低減**: 不要なオペレーションへのアクセス完全遮断
- **監査対応**: アクセス権限の詳細な制御と追跡

### 運用効率化

- **一元管理**: 複数アカウントのCAを一箇所で管理
- **コスト削減**: アカウント別CA構築の不要化
- **柔軟性**: 組織構変更に対応した権限調整

---

## まとめ

### AWS Private CA の進化

カスタマー管理権限により、複数アカウント間でのCA共有がより安全で柔軟に

### 主要ポイント

1. **きめ細かいアクセス制御** - 不要なオペレーションを完全に遮断
2. **PKI一元化** - 複数アカウント管理をシンプルに
3. **セキュリティ向上** - 最小権限の原則を実現
4. **グローバル対応** - すべてのリージョンで利用可能

### 次のステップ

1. AWS Private CA User Guideで詳細を確認
2. パイロットプロジェクトでの検証
3. 本番環境への段階的展開

---

## 参考リソース

### 元記事

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-private-ca-customer-managed-permissions/

### AWS公式ドキュメント

- **AWS Private CA User Guide**: https://docs.aws.amazon.com/privateca/latest/userguide/pca-cmp.html
- **AWS RAM User Guide**: https://docs.aws.amazon.com/ram/latest/userguide/create-customer-managed-permissions.html
- **PCA Cross-account Sharing**: https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html

### セキュリティガイド

- **Cross-account PCA セキュリティベストプラクティス**: https://docs.aws.amazon.com/privateca/latest/userguide/pca-resource-sharing.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**