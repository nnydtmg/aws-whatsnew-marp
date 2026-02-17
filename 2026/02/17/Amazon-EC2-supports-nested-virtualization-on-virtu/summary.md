# Amazon EC2 supports nested virtualization on virtual Amazon EC2 instances

**カテゴリ:** What's New
**公開日:** 2026-02-16T08:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ec2-nested-virtualization-on-virtual](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ec2-nested-virtualization-on-virtual)

---

## 要約

Amazon EC2は、仮想インスタンス上でKVMまたはHyper-Vを実行することで、ネストされた仮想マシンの作成をサポートするようになりました。このアップデートは、モバイルエミュレータ、ハードウェアシミュレーション、Windows Subsystem for Linuxなどの複雑な仮想化環境が必要な開発者やエンタープライズ企業に有用です。

## 詳細

### これまでの課題

Amazon EC2では、これまでベアメタルEC2インスタンス上でのみ仮想マシンの作成と管理が可能でした。仮想インスタンスではハードウェア仮想化拡張機能が利用できないため、多層の仮想化環境が必要なユースケースに対応できていませんでした。

### 今回のアップデート

Amazon EC2は、仮想EC2インスタンス上でのネストされた仮想化をサポートするようになりました。これにより、仮想インスタンス上でKVMまたはHyper-Vを実行してネストされた仮想マシンを作成できるようになります。

### 対応インスタンスと利用可能リージョン

このアップデートは、以下のインスタンスファミリーのすべてのコマーシャルリージョンで利用可能です：

- **C8i**: 計算最適化インスタンスファミリー
- **M8i**: 汎用インスタンスファミリー  
- **R8i**: メモリ最適化インスタンスファミリー

### 主なユースケース

1. **モバイルアプリケーション開発**
   - Androidエミュレータ、iOSシミュレータの実行環境
   - 複数のデバイス環境を同時にシミュレート

2. **自動車業界**
   - 車載ハードウェアシミュレーション環境
   - ECUエミュレーション
   - 自動車システムの検証環境

3. **開発・テスト環境**
   - Windows Subsystem for Linux (WSL) の実行
   - マイクロVMフレームワーク (Firecracker など) の実行
   - 複雑な開発環境の構築

### 技術的な特徴

- ハードウェア仮想化拡張機能を環境内で有効にするだけで利用可能
- 既存のKVM/Hyper-V環境をそのままAWSに移行可能
- 開発者やテスト環境の構築が必要な組織、複数層の仮想化環境を必要とするユースケースを持つ企業に適しています

### 期待される効果

- **コスト削減**: ベアメタルインスタンスより低コストな仮想インスタンスで実現
- **開発効率向上**: 複数層の仮想化環境を標準的なインスタンスで構築可能
- **柔軟性向上**: 必要なときに必要なリソース量で環境構築が可能

---

## 参考リソース

### AWS 公式

- [AWS What's New: Amazon EC2 supports nested virtualization on virtual Amazon EC2 instances](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ec2-nested-virtualization-on-virtual/)
- [Amazon EC2 ドキュメント](https://docs.aws.amazon.com/ec2/)
- [EC2 インスタンスタイプ](https://aws.amazon.com/ec2/instance-types/)

### 関連記事

- [AWS Finally Launches Nested Virtualisation on EC2 - sjramblings.io](https://sjramblings.io/aws-ec2-nested-virtualization-finally/)
- [AWS adds nested virtualization option for EC2 - The Register](https://www.theregister.com/2026/02/17/nested_virtualization_aws_ec2/)
- [EC2 nested virtualization support on non-bare-metal instances - Classmethod](https://dev.classmethod.jp/en/articles/ec2-nested-virtualization-support-non-bare-metal/)
