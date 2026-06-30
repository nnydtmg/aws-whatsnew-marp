---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon WorkSpaces for AI agentsが一般提供開始

Announcing general availability of Amazon WorkSpaces for AI agents

**発表日: 2026年6月30日**

---

## 概要

### Amazon WorkSpaces for AI agentsの3つの特徴

- **デスクトップアプリケーション統合**: AIエージェントがERPやCRM、メインフレームなどのレガシーアプリケーションに直接アクセス可能
- **アプリケーション近代化不要**: 既存システムの改変なしにAIの自動化を実現
- **エンタープライズグレードのセキュリティ**: アイデンティティ制御、ネットワーク分離、コンプライアンス境界を継承

---

## 前提・背景

### エンタープライズの課題

- **レガシーシステムの「最後の1マイル問題」**: 既存のデスクトップアプリケーションはAPIがなく、AIエージェントによる自動化が困難
- **手作業による効率低下**: 請求処理、データ入力、システム間の手動連携に多くの時間がかかる
- **統合コストの増加**: カスタム統合やシステム近代化には多大な投資が必要

### Amazon WorkSpacesの強み

- **10年以上の実績**: 信頼されたエンタープライズクラウドデスクトップサービス
- **AIエージェント対応へ**: プレビュー期間を経て一般提供開始

---

## 主な機能と改善

### 1. MCPツール転送

- エージェントが直接MCPコールを通じてアプリケーションやデスクトップOSと対話
- コンピュータ使用ツールよりも高精度、低レイテンシー、低コスト

### 2. リアルタイムセッション制御

- オペレーターがエージェント活動をライブで可視化
- セッション中にアクセス権限を動的に取り消し可能

### 3. ドメイン参加フリート対応

- エージェントが既存のActive Directoryアイデンティティで動作
- 従業員と同じアクセスポリシーと監査属性が適用される

---

## ユースケース

### 業務プロセスの自動化

<div class="columns">
<div>

#### 金融・会計

- 請求処理の自動化
- 取引決済業務
- 経費精算処理

</div>
<div>

#### ヘルスケア

- 患者記録更新
- 保険請求処理
- 医療記録管理

</div>
<div>

#### バックオフィス

- HR業務の自動化
- 在庫管理
- 調達プロセス

</div>
</div>

---

## 効果・メリット

- **自動化の加速**: 人間と同じ方法でレガシーアプリケーションを操作、自動化の範囲を拡大
- **システム改修不要**: 既存アプリケーションの変更やAPI開発の必要がない
- **ガバナンス維持**: アイデンティティ制御やコンプライアンス要件を継承
- **コスト削減**: 精度向上、レイテンシー削減、処理コスト低減
- **スケーラビリティ**: 従量課金でアクティブセッション時間に基づいて自動スケール

---

## まとめ

### Amazon WorkSpaces for AI agentsの位置づけ

- **レガシーシステムの最後の1マイル問題を解決**
- **エンタープライズグレードのセキュリティとガバナンスを実現**
- **AIエージェントによる大規模自動化を可能に**

### 次のステップ

1. 自社のレガシーシステムで自動化可能な業務プロセスを特定
2. Amazon WorkSpaces for AI agentsのパイロット実装
3. 本番環境への段階的展開

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-workspaces-ai/
- **Amazon WorkSpaces ドキュメント**: https://docs.aws.amazon.com/workspaces/
- **Model Context Protocol**: https://modelcontextprotocol.io/

### 関連情報

- [Amazon WorkSpaces now lets AI agents operate desktop applications (Preview)](https://aws.amazon.com/about-aws/whats-new/2026/05/workspaces-ai-agents)
- [Unlock the power of AI agents with Amazon WorkSpaces - AWS](https://www.youtube.com/watch?v=LzNeOEvn0us)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**