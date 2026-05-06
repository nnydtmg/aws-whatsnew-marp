---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Site-to-Site VPN
既存接続のトンネル帯域幅変更に対応

**発表日: 2026年5月6日**

---

## 概要

### AWS Site-to-Site VPN の新機能

- **トンネル帯域幅の動的変更**: スタンダード（1.25 Gbps）からラージ（5 Gbps）へのアップグレードが可能
- **設定の保持**: IP アドレス、CIDR ブロック、事前共有鍵がすべて保持される
- **ダウンタイムの削減**: 接続の削除・再作成が不要
- **デバイス設定変更不要**: オンプレミス VPN デバイスの再設定が不要

---

## 前提・背景

### これまでの課題

- トンネル帯域幅を変更するには、VPN 接続を**削除して再作成**する必要があった
- **新しいトンネル IP アドレス**が生成されるため、オンプレミスデバイスの設定更新が必須
- **ファイアウォール ルールの更新**も必要になり、複雑な作業が発生
- ビジネス要件の変化に迅速に対応できない

### 市場の動向

- クラウドからオンプレミスへの**トラフィック増加**
- ハイブリッドクラウド環境の**拡大と高速化要求**
- ネットワークの**柔軟性と可用性**がより重要に

---

## 変更内容・新機能

### 帯域幅オプション

| 帯域幅レベル | 最大スループット | 用途 |
|-----------|--------------|------|
| **スタンダード** | 1.25 Gbps | 中程度のトラフィック |
| **ラージ** | 5 Gbps | **高スループット、4倍の改善** |

### 主な特徴

- **設定の完全保持**
  - IP アドレス、CIDR ブロック、事前共有鍵が変更されない
  - BGP 設定もそのまま維持
  
- **シームレスなアップグレード**
  - 接続削除不要
  - 再作成による新規 IP 割り当てなし

---

## 効果・メリット

### 運用効率の向上

- ✅ **オンプレミス設定変更が不要**: セットアップ作業を大幅削減
- ✅ **ファイアウォール ルール変更不要**: 運用負担の軽減
- ✅ **ビジネス要件への迅速対応**: トラフィック増加時のスピーディな対応

### コスト最適化

- ✅ **既存接続の有効活用**: 新規作成不要
- ✅ **ダウンタイム削減**: ビジネス継続性の向上

### パフォーマンス向上

- ✅ **帯域幅 4 倍向上**: 1.25 Gbps → 5 Gbps
- ✅ **高スループットワークロード対応**: データ同期、バックアップなど

---

## ユースケース

### 1. ハイブリッドクラウド環境の拡張

- データセンターからクラウドへの**大容量データ同期**
- トラフィック増加に対応した**段階的な帯域幅拡張**

### 2. ディザスタリカバリー（DR）

- バックアップサイトへの**高速データ転送**
- RTO 短縮による**復旧時間の改善**

### 3. リアルタイムアプリケーション

- 金融データフィード、ビデオストリーミング
- **低レイテンシー、高スループット**が必須

---

## 利用可能なリージョン

### グローバル展開

- **米国**: US-East (VA, OH)、US-West (CA)、US Gov-West
- **ヨーロッパ**: Frankfurt、London、Paris、Madrid、Stockholm
- **アジアパシフィック**: Hong Kong、Hyderabad、Jakarta、KL、Mumbai、NZ、Osaka、Seoul、Sydney、Taipei、Bangkok、Tokyo
- **その他**: Cape Town、Mexico City、São Paulo

---

## 実装方法

### AWS コンソール / AWS CLI での設定例

```bash
# トンネル帯域幅をラージに変更
aws ec2 modify-vpn-tunnel-options \
  --vpn-connection-id vpn-xxxxx \
  --tunnel-index 0 \
  --tunnel-options TunnelInsideCidr=169.254.10.0/30, \
    Phase1EncryptionAlgorithms=AES128, \
    Phase2EncryptionAlgorithms=AES128, \
    TunnelBandwidth=Large
```

### 設定変更のステップ

1. AWS マネジメントコンソールで VPN 接続を選択
2. トンネルオプション設定画面を開く
3. 帯域幅を「スタンダード」→「ラージ」に変更
4. 変更を適用
5. オンプレミス側の設定は**変更不要**

---

## まとめ

### AWS Site-to-Site VPN の進化

- **シンプルなアップグレード**: 接続削除・再作成不要で帯域幅拡張可能
- **運用負担の軽減**: オンプレミス側の設定変更が不要
- **ビジネスの俊敏性向上**: トラフィック変化への迅速対応

### 次のステップ

1. 現在の VPN 接続を確認
2. トラフィック要件を分析
3. 必要に応じて帯域幅変更を実施
4. パフォーマンスの改善を確認

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-site-to-site-vpn-modify-bandwidth/
- **AWS Site-to-Site VPN ドキュメント**: https://docs.aws.amazon.com/vpn/latest/s2svpn/tunnel-configure.html
- **AWS ブログ**: https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-site-to-site-vpn-5-gbps-tunnels-to-support-high-throughput-workloads/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**