# Automated Reasoning policies now include references to the source document

**カテゴリ:** What's New
**公開日:** 2026-02-23T09:35:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/automated-reasoning-policies-include-references/](https://aws.amazon.com/about-aws/whats-new/2026/02/automated-reasoning-policies-include-references/)

---

## 要約

AWS は Automated Reasoning ポリシーにソースドキュメント参照機能を追加しました。このアップデートにより、ユーザーは生成されたポリシールールと変数を元のドキュメントの内容と照合しながらレビューできるようになりました。このアップデートは、生成 AI の出力がポリシーに準拠していることを保証する必要がある HR、金融、規制遵守分野の組織に特に適しています。

---

## 主な特徴

### 1. ソースドキュメント参照機能
- 生成されたポリシールールが元のドキュメントのどこから導出されたかを追跡
- ユーザーが参照元ドキュメント内容を確認しながらレビュー可能
- ポリシールール**と変数**の両方がトレース可能

### 2. 高精度な AI ハルシネーション検出
- 最大 **99% の精度**で不正確な AI 出力を検出
- 数学的検証による証明可能な保証を提供
- 統計的信頼度ではなく形式的証明によるリスク低減

### 3. 形式検証技術
- 基盤モデルによって生成されたコンテンツが政策に準拠しているかを形式検証技術で検証
- LLM の正しい応答を検出する証明可能な保証

---

## 利用シナリオ

### HR 分野
- 人事ポリシーの自動検証
- 給与決定、昇進プロセス、福利厚生ガイドラインの適用

### 金融分野
- 財務取引承認ガイドラインの自動検証
- 融資審査、金額制限ルール、リスク評価基準の自動適用

### 規制遵守分野
- コンプライアンス要件の自動検証
- 報告義務、規制基準への自動準拠確認

---

## 技術的な詳細

### Automated Reasoning チェックの機能

- **ドキュメント処理**: HR ポリシーや財務取引承認ガイドラインなどのドキュメントをアップロード
- **ポリシー自動抽出**: Automated Reasoning がドキュメントからルールを自動抽出
- **テスト生成**: 自然言語によるテスト Q&A を自動生成し、ポリシー動作を検証
- **本番運用**: Amazon Bedrock コンソールおよび Python SDK で実装

### 利用可能地域

**北米:**
- 米国 (N. Virginia)
- 米国 (Ohio)
- 米国 (Oregon)

**ヨーロッパ:**
- ヨーロッパ (Frankfurt)
- ヨーロッパ (Ireland)
- ヨーロッパ (Paris)

---

## メリットと期待効果

### リスク低減
- AI ハルシネーションを 99% の精度で検出・防止
- ポリシー違反を事前に防止

### コンプライアンス強化
- ポリシー準拠性を数学的に保証
- 監査対応の容易性と追跡可能性の向上

### 運用効率化
- 手動レビュー工数を大幅削減
- リアルタイム検証による処理速度向上

### スケーラビリティ
- 複数ポリシーの一元管理
- 複数組織への展開が容易

---

## 実装ステップ

### ステップ1: ポリシー定義
1. Amazon Bedrock コンソールで Guardrails を選択
2. 自然言語でポリシードキュメントをアップロード
3. Automated Reasoning がルールを自動抽出

### ステップ2: テストと検証
1. サンプル Q&A でポリシー動作を検証
2. テスト結果から不正確なルールを修正
3. ポリシーの精度を段階的に向上

### ステップ3: 本番展開
1. 本番環境で Automated Reasoning チェックを有効化
2. 生成 AI の出力を自動検証
3. ポリシー違反を事前に防止

---

## ユースケース例

### 1. HR システム - 給与提示書自動生成
**課題**: 採用候補者の給与提示書を AI が自動生成する際、給与が HR ポリシー (勤続年数に基づく範囲) に準拠しているか確認
**解決**: Automated Reasoning が生成給与をポリシーと照合して検証
**結果**: 99% の精度で違反を防止

### 2. 金融システム - 融資申請自動判定
**課題**: 融資申請の自動承認・却下判定が金融規制要件に準拠しているか確認
**解決**: Automated Reasoning が各判定ルールを規制ガイドラインと照合
**結果**: コンプライアンスを確保しながら自動化を実現

### 3. 規制遵守 - コンプライアンス報告書自動生成
**課題**: 生成コンテンツが規制要件を正確に満たしているか検証
**解決**: ポリシーとソースドキュメントをアップロードして検証
**結果**: 監査準備が迅速になり監査リスク低減

---

## 今後の対応

### 推奨される次のステップ

1. **評価**: 自社のユースケースに適用可能性を検討
   - HR、金融、規制遵守部門と協議
   - 現在の手動レビュープロセスの分析

2. **パイロット**: 限定的なユースケースで実施
   - 初期ポリシーの定義
   - テスト結果の検証と改善

3. **展開**: 成功事例をベースに本番環境へ段階的展開
   - 全社的なポリシーの統一
   - 組織横断的なベストプラクティス共有

4. **最適化**: 運用を通じてポリシーを継続改善
   - 定期的なポリシーレビュー
   - 新しいユースケースの適用

---

## 参考リソース

### 公式ドキュメント
- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/automated-reasoning-policies-include-references/
- **Amazon Bedrock Guardrails**: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html
- **Automated Reasoning チェック**: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-ar.html

### 参考記事
- **Ensuring AI Compliance and Safety**: https://www.cloudthat.com/resources/blog/ensuring-ai-compliance-and-safety-with-amazon-bedrock-automated-reasoning/
- **The Reasoning Revolution**: https://builder.aws.com/content/33BYGPD05uzFlGW3ib2pvjqutj2/the-reasoning-revolution-how-automated-reasoning-completes-the-ai-verification-framework
- **Natural Language Test Generation**: https://aws.amazon.com/about-aws/whats-new/2025/11/automated-reasoning-checks-include-natural-language/
