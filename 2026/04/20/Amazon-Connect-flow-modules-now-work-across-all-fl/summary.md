# Amazon Connect flow modules now work across all flow types and within other modules

**カテゴリ:** What's New
**公開日:** 2026-04-17
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-connect-flow-modules-enhancements/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-connect-flow-modules-enhancements/)

---

## 要約

Amazon Connectのフロー モジュールがすべてのフロー タイプで利用可能になり、モジュール内での他モジュール呼び出しもサポートされるようになりました。これにより、顧客体験全体で共通ロジックを再利用し、複雑なビジネス プロセスを柔軟に構築できるようになりました。

---

## 詳細

### 変更内容

1. **すべてのフロー タイプでの対応**
   - Amazon Connectのフロー モジュールが、すべてのConnect フロー タイプおよび他のモジュール内で使用可能になりました
   - 従来よりも広範なユースケースに対応できるようになりました

2. **ネストされたモジュール呼び出し**
   - フロー モジュールを他のモジュール内で呼び出すことが可能になりました
   - 複雑なロジックを階層的に構築できるようになりました

3. **共通ロジックの再利用強化**
   - 顧客体験全体で共通のロジックと機能を再利用できるようになりました
   - コード重複を削減し、保守性が向上します

### 活用例

#### エージェント ウィスパー フロー
- モジュールを使用して顧客の最近のトランザクション情報を共有
- エージェント支援の品質向上

#### クレジット カード適格性チェック
- 複数のモジュールを組み合わせて使用
- 信用スコア確認
- 収入検証
- 支払い履歴確認

### ビジネス上のメリット

- **開発効率向上**: 再利用可能なコンポーネントにより、新規フロー開発が高速化
- **保守性向上**: 変更がモジュール単位で完結し、全体への影響を最小化
- **スケーラビリティ**: ビジネス要件の変化に応じて、既存の再利用可能なコンポーネントを組み合わせて拡張

### リージョン可用性

- この機能は、Amazon Connectが提供されているすべてのAWSリージョンで利用可能です

---

## 関連情報

- [Amazon Connect adds conditional logic and real-time updates to Step-by-Step Guides](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-connect-conditional-logic-real-time-updates-step-by-step-guides/) (2026年1月)
- [Amazon Connect now provides integrated agent coaching workflows](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-connect-integrated-agent-coaching-workflows/) (2026年3月)