---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# CloudWatch Logs 集約ルール
カスタマイズ可能な宛先ロググループ構造に対応

**発表日: 2026年2月27日**

---

## 概要

### CloudWatch Logs 集約ルールの新しい機能

- **カスタマイズ可能な宛先ロググループ名構造**に対応
- 複数アカウント環境でのログ管理が更に柔軟に
- 組織の運営方法やコンプライアンス要件に合わせた階層化が可能
- すべてのセントラリゼーション対応リージョンで利用可能

---

## 前提・背景

### ログ管理の課題

- **複数アカウント・リージョン環境での管理複雑化**
  - AWS Organization 配下の多くのアカウントからのログ集約
  - リージョン分散時の一元管理の困難さ
  
- **ログ識別性の低さ**
  - ログの出所を即座に判別できない
  - 階層構造なしでの管理効率低下

- **コンプライアンス要件への対応**
  - 組織ポリシーに基づいた構造化が必要
  - 監査ログの整理・管理ルールの明確化

### 従来のクラウドログ管理

- ログが単一の集約先ロググループに蓄積
- 出所情報の把握に追加処理が必要
- カスタマイズの自由度が限定的

---

## 主な機能と改善

### 1. 属性ベースの動的ロググループ命名

**利用可能な属性:**
- `${source.accountId}` - ソースアカウントID
- `${source.region}` - ソースリージョン
- `${source.logGroup}` - ソースロググループ名
- `${source.organizationId}` - 組織ID
- `${source.organizationalUnitId}` - OU ID
- `${source.rootId}` - ルートID
- `${source.organizationalPath}` - 完全な組織パス

### 2. 命名パターンの例

```
例: ${source.accountId}/${source.region}/${source.logGroup}
結果: 123456789012/us-east-1/cloudtrail/managementevent
```

---

## パターン例と活用シーン

### パターン1: アカウント・リージョン分離

```
パターン: ${source.accountId}/${source.region}/${source.logGroup}
結果例:
  - 111111111111/us-east-1/app-logs/api
  - 111111111111/eu-west-1/app-logs/api
  - 222222222222/us-east-1/app-logs/api
```

### パターン2: 組織単位ベース

```
パターン: ${source.organizationalPath}/${source.region}/${source.logGroup}
結果例:
  - Production/Platform/us-east-1/application
  - Development/Backend/us-west-2/database
```

### パターン3: 環境ベース

```
パターン: ${source.organizationalUnitId}/${source.logGroup}
結果例:
  - ou-prod-xxxx/cloudtrail/api-calls
  - ou-dev-xxxx/application/errors
```

---

## 効果・メリット

### 管理効率の向上

- ✅ **ログ出所の即座の判別**
  - ロググループ名からアカウント・リージョンが一目瞭然
  - 追加処理なしで対象ログへのアクセス

- ✅ **階層化による管理の簡素化**
  - 組織ポリシーに準拠した構造化
  - CloudWatch Insights の検索効率向上

### コンプライアンス・セキュリティ

- ✅ **監査ログの可視性向上**
  - コンプライアンス監査対応が容易
  - ログの追跡可能性が向上

- ✅ **組織構造の反映**
  - 部門別・環境別での明確な分離
  - アクセス制御・権限管理との連携

### 運用コストの最適化

- ✅ **自動化による手作業削減**
  - ルール定義後は自動的にパターン適用
  - パターン変更時の一括反映

---

## 料金モデル

### ログ集約の課金構造

| 対象 | 料金 | 備考 |
|-----|------|------|
| 最初の1コピー（取り込み） | **無料** | 初回集約は無料 |
| 追加コピー（バックアップリージョン含む） | **$0.05/GB** | 集約されたログ1GB あたり |
| ストレージ | 標準料金 | CloudWatch Logs ストレージ通常料金適用 |

---

## ユースケース

### ユースケース1: マルチテナント SaaS 企業

```
構造: ${source.accountId}/${source.region}/${source.organizationalUnitId}/${source.logGroup}

効果:
- テナント別ログの完全分離
- リージョン別パフォーマンス分析が容易
- SLA 監視の自動化
```

### ユースケース2: 金融機関の規制対応

```
構造: Compliance/${source.region}/Audit/${source.logGroup}

効果:
- 監査ログの一元化と可視化
- 規制要件に準拠した階層構造
- コンプライアンス監査の効率化
```

### ユースケース3: エンタープライズマルチアカウント

```
構造: ${source.organizationalPath}/${source.region}/Logs

効果:
- 部門・チーム別ログ管理
- 環境（本番・検証）の明確な分離
- クロスファンクショナル分析の効率化
```

---

## 利用開始方法

### ステップ1: CloudWatch Logs コンソール へアクセス

- AWS Management Console にサインイン
- CloudWatch サービスへ移動

### ステップ2: 集約ルール作成

- 「Logs」→「Centralization rules」を選択
- 「Create centralization rule」をクリック

### ステップ3: ルール設定

- ソースアカウント・リージョンを指定
- **宛先ロググループ名パターンを定義**（例: `${source.accountId}/${source.region}/${source.logGroup}`）
- フィルター条件を設定（オプション）

### ステップ4: ルール検証・保存

- 設定内容を確認
- ルールを有効化

---

## 注意点・ベストプラクティス

### ✅ 推奨される使い方

- **シンプルで一貫性のあるパターン定義**
  - 複数ルール間での命名規則の統一
  - 将来の拡張性を考慮

- **組織構造に基づいた設計**
  - AWS Organizations の OU 構造を反映
  - アクセス制御との連携を考慮

- **テスト環境での検証**
  - パイロット的に一部ルールから開始
  - 本番環境への段階的展開

### ⚠️ 留意事項

- ロググループ名に使用できる文字数に制限あり
- パターン変更後の既存ログには遡及適用されない
- 宛先ロググループ名変更時は新ロググループが作成される

---

## まとめ

### CloudWatch Logs 集約ルールの進化

- **柔軟性の向上**: 属性ベースの動的命名で、組織要件に完全対応
- **管理効率化**: 階層構造でログ検索・分析が劇的に向上
- **コンプライアンス対応**: 監査ログの可視性・追跡可能性を強化

### 次のステップ

1. **現在のログ管理ポリシーの確認**
   - 組織の命名規則・コンプライアンス要件を整理

2. **パターン設計の検討**
   - 適切な属性組み合わせを検討

3. **テスト環境での実装**
   - 一部ルールで動作検証

4. **本番環境への段階的展開**
   - 予期しない挙動がないか確認しながら展開

---

## 参考リソース

- **AWS What's New**: [Amazon CloudWatch logs centralization rules now support customizable destination log group structure](https://aws.amazon.com/about-aws/whats-new/2026/02/cloudwatch-centralization-custom-groups/)
- **CloudWatch Logs Centralization ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_Centralization.html
- **Monitor across accounts and Regions**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Cross-Account-Methods.html
- **AWS CloudWatch Logs 料金**: https://aws.amazon.com/cloudwatch/pricing/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**