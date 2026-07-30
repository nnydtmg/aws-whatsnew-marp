# IAM Policy SimulatorがIAMコンソールに統合、新機能も追加

IAM Policy Simulator moves to the IAM console and adds additional capabilities

**カテゴリ:** What's New
**公開日:** 2026-07-30
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/iam-policy-simulator-iam-console/)

---

## 要約

IAM Policy Simulator が IAM コンソールに統合され、複数の新機能が追加されました。SCP（Service Control Policies）のテスト、条件キーのシミュレーション、ポリシー除外機能などが実装され、セキュリティおよびプラットフォームチームがポリシーユニットテストの自動化、過度なアクセス権限の検出、ガードレール検証をより効率的に実施できるようになりました。

---

## このアップデートで何が変わったか

### コンソール統合
- IAM Policy Simulator がスタンドアロンサイトから IAM コンソールに統合
- IAM コンソール内でポリシーのテスト・検証が可能に
- スタンドアロンサイトとの切り替えが不要に

### SCP テストサポート
- Service Control Policies (SCPs) のテストがサポート開始
- 組織の SCP 階層とアイデンティティ・リソースポリシーの相互作用をテスト可能

### 条件キーのシミュレーション
- API を通じてリージョン制限やタグ要件などの条件キーをシミュレーションに含めることが可能
- より現実的なアクセス制御シナリオでテスト

### ポリシー除外機能
- 特定のポリシーを除外してシミュレーション実行が可能
- 「このポリシーを削除した場合」といった仮定シナリオのモデル化が容易に

### クロスアカウント対応強化
- クロスアカウントシミュレーションでアイデンティティおよびリソースベースポリシーのポリシーごとの決定を報告
- 拒否リクエストの場合、マッチしたステートメントは決定を駆動したポリシーのみが返却

---

## 効果・メリット

### セキュリティチーム
- ポリシーユニットテストの自動化が容易に
- 過度なアクセス権限の検出がより効率的・正確に
- ガードレール検証がより信頼度高く実施可能

### 運用効率
- IAM コンソール内で完結した作業フロー
- ポリシー管理者の生産性向上
- 検証プロセスの標準化が容易に

### ガバナンス
- 最小権限の原則の検証を自動化
- 組織横断的なアクセス制御ルールの遵守確認
- 定期的なアクセス権限監査の効率化

---

## 利用シナリオ

### 1. ポリシー変更の事前検証
セキュリティチームが新しい IAM ポリシーを提案する際、IAM コンソール内の Policy Simulator で SCP を含めたテストとシミュレーションを実施。本番環境への適用前にポリシーの挙動を確認。

### 2. 組織ガバナンスの検証
複数の AWS アカウントを運用する組織で、各アカウントのアイデンティティポリシーと組織レベルの SCP の相互作用を検証。

### 3. アクセス権限の監査
定期的な IAM アクセス権限監査時に、アクティブなユーザー・ロールに対して過度な権限がないかを Policy Simulator で検証。

### 4. クロスアカウントアクセスのテスト
リソースベースポリシーとアイデンティティポリシーの複合的なシナリオをテスト実施。

---

## 対応リージョン

IAM Policy Simulator が利用可能なすべての AWS リージョンでこれらの新機能が利用できます。

---

## 参考リンク

- [AWS What's New - IAM Policy Simulator](https://aws.amazon.com/about-aws/whats-new/2026/07/iam-policy-simulator-iam-console/)
- [AWS IAM ドキュメント - IAM policy testing with the IAM policy simulator](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html)
- [IAM policy simulator limits: what teams miss beyond policy testing](https://nhimg.org/community/nhi-best-practices/iam-policy-simulator-limits-what-teams-miss-beyond-policy-testing)
