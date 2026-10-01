# Amazon QuickがHierarchy Filterを追加、ダッシュボードのドリルダウンが容易に

Amazon Quick adds Hierarchy Filter for guided dashboard drill-down

**カテゴリ:** What's New
**公開日:** 2026-09-30T15:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/quick-hierarchy-filter)

このページでは、AWS What's Newで発表された「Amazon Quick adds Hierarchy Filter for guided dashboard drill-down」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Quickに階層フィルター（Hierarchy Filter）が追加され、ダッシュボードのドリルダウンが容易になりました。読者が関連する次元（Region、Country、Cityなど）を単一のコントロールでドリルスルーできるようになり、複数の積み上げフィルターを置き換えてダッシュボードの乱雑さを減らし、少ないクリックでデータを案内します。最大5階層までの次元を広い順から詳細な順に配置でき、選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択されます。地理的な次元に限らず、Product Category → Product などの親子関係がある次元で利用できます。Amazon QuickがサポートされるすべてのAWSリージョンで今日から利用可能です。

## このアップデートで何が変わったか

Amazon Quickに階層フィルター（Hierarchy Filter）が追加されました。この機能は、読者がRegion、Country、Cityなどの関連する次元をドリルスルーできる単一のコントロールを提供します。複数の積み上げフィルターを置き換え、ダッシュボードの乱雑さを減らし、少ないクリックでデータを案内します。

主な特徴:
- 最大5階層までの次元を単一コントロールに集約（例: Region → Subregion → Country → City → Town）
- 読者は1つのドロップダウンを開き、各レベルを順に展開。選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択される
- Mix-and-match選択: 例えば国全体（日本）と単一の都市（ニューヨーク）を同じコントロールで組み合わせて選択可能
- 地理的次元に限定されず、Product Category → Product などの親子関係がある次元で利用可能
- 作成者はフィルターを追加し、タイプをHierarchy filterに設定し、フィールドを親から子の順に並べるだけで作成可能

## 対象ユーザー

対象ユーザー: Amazon Quickのダッシュボードを使用する読者（リーダー）と作成者（オーサー）

## 活用シーン

主な特徴:
- 最大5階層までの次元を単一コントロールに集約（例: Region → Subregion → Country → City → Town）
- 読者は1つのドロップダウンを開き、各レベルを順に展開。選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択される
- Mix-and-match選択: 例えば国全体（日本）と単一の都市（ニューヨーク）を同じコントロールで組み合わせて選択可能
- 地理的次元に限定されず、Product Category → Product などの親子関係がある次元で利用可能
- 作成者はフィルターを追加し、タイプをHierarchy filterに

## 詳細

Amazon Quickに階層フィルター（Hierarchy Filter）が追加されました。この機能は、読者がRegion、Country、Cityなどの関連する次元をドリルスルーできる単一のコントロールを提供します。複数の積み上げフィルターを置き換え、ダッシュボードの乱雑さを減らし、少ないクリックでデータを案内します。

主な特徴:
- 最大5階層までの次元を単一コントロールに集約（例: Region → Subregion → Country → City → Town）
- 読者は1つのドロップダウンを開き、各レベルを順に展開。選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択される
- Mix-and-match選択: 例えば国全体（日本）と単一の都市（ニューヨーク）を同じコントロールで組み合わせて選択可能
- 地理的次元に限定されず、Product Category → Product などの親子関係がある次元で利用可能
- 作成者はフィルターを追加し、タイプをHierarchy filterに設定し、フィールドを親から子の順に並べるだけで作成可能

キャスケーディングフィルターとの違い:
- Hierarchy Filter: ドリルパス全体を単一のコントロールに収納し、各レベルが上位のレベルにネストされる
- Cascading Filter: 別々のコントロールを使用し、1つのコントロールでの選択が次のコントロールの値を絞り込む

制約事項:
- 最大5階層まで
- 次元フィールドのみ追加可能（測定値は不可）
- 下位レベルの値を選択すると親チェーンが自動選択される
- 最上位レベルの検索バーは最高レベルのみ検索
- 10個超の固有値がある下位レベルには独自の検索ボックスが表示
- 1,000個超の固有値があるレベルは検索ボックスのみ表示

ユースケース:
- 小売売上ダッシュボード: Region → Country → City の地理的階層で売上を探索
- 製品分析: Product Category → Product の製品階層でカテゴリから個別製品へドリルダウン

対象ユーザー: Amazon Quickのダッシュボードを使用する読者（リーダー）と作成者（オーサー）

利用可能リージョン: Amazon QuickがサポートされるすべてのAWSリージョンで今日から利用可能

関連リンク:
- ブログ: https://aws.amazon.com/blogs/machine-learning/simplify-dashboard-drill-down-with-the-amazon-quick-sight-hierarchy-filter/
- ドキュメント: https://docs.aws.amazon.com/quick/latest/userguide/hierarchy-filter.html

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/quick-hierarchy-filter)