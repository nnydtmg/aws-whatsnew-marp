---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Runtime
WebRTC対応でリアルタイム双方向ストリーミング実現

**発表日: 2026年3月20日**

---

## 概要

### 3つの主要な改善点

- **WebRTC 対応**: ブラウザおよびモバイルアプリケーション向けの低遅延リアルタイム双方向ストリーミング
- **複数の TURN リレーオプション**: Amazon Kinesis Video Streams、サードパーティプロバイダー、セルフホスト型から選択可能
- **14の AWS リージョン対応**: グローバルな音声エージェント実装が可能

### 主な特徴

- UDP ベースのピア・ツー・ピア通信で低遅延を実現
- WebSocket プロトコルに加える 2 番目の双方向ストリーミングプロトコル

---

## 前提・背景

### 市場の課題

- AI エージェントでのリアルタイム通信需要の増加
- ブラウザ・モバイルでの低遅延音声・ビデオ通信の必要性
- 複数のプロトコルによる柔軟な実装オプション不足

### Amazon Bedrock AgentCore の進化

- WebSocket に加えて WebRTC をサポート
- エンタープライズ向けリアルタイムエージェント基盤の強化
- 開発者向けの選択肢拡大と実装の柔軟性向上

---

## 主な機能と改善

### WebRTC 通信の特徴

| 特性 | WebRTC | WebSocket |
|------|--------|----------|
| 通信方式 | UDP P2P | TCP |
| 遅延性 | **超低遅延** | 低遅延 |
| 用途 | 音声・ビデオ | テキスト・バイナリ |
| ネットワーク効率 | 最適化 | 標準 |

### TURN リレーオプション

- **Amazon Kinesis Video Streams**: AWS管理型 TURN（推奨）
- **サードパーティプロバイダー**: Twilio、Google等の選択肢
- **セルフホスト型**: 完全自社管理インフラ

---

## ユースケース

### 最適な活用シーン

- **カスタマーサポート**: リアルタイム音声エージェントによる顧客対応
- **多言語通訳**: Amazon Nova Sonic を用いた自動翻訳対応
- **ライブストリーミング**: 低遅延のビデオ配信と AI 分析統合
- **IoT デバイス操作**: エッジデバイスとの即時双方向通信

### 提供されるサンプル実装

- **Amazon Nova Sonic 音声エージェント**
- **Pipecat 音声エージェント**
- **LiveKit 音声エージェント**
- **Strands Agents SDK 音声エージェント**

---

## 効果・メリット

### 開発生産性の向上

- 実装難度の低い WebRTC 統合サンプルコード提供
- 複数のプロトコル選択により最適な実装パターン選定が可能
- AWS ドキュメント・チュートリアルで学習コスト低減

### ユーザー体験の改善

- **低遅延**: UDP ベースで会話型AI の応答性向上
- **ネットワーク効率**: モバイルで帯域幅最適化
- **信頼性**: 複数の TURN リレーオプションで可用性確保

### スケーラビリティ

- 14 の AWS リージョンでのグローバル展開対応
- Amazon Kinesis Video Streams による自動スケーリング
- エンタープライズ向けの SLA・セキュリティ保証

---

## 対応リージョン

### 14の AWS リージョンで利用可能

```
北米: US East、US West、Canada
ヨーロッパ: EU West、EU Central
アジア太平洋: Tokyo、Singapore、Sydney、Seoul
その他: Dubai、Brazil
```

---

## 技術的なポイント

### WebRTC 実装のアーキテクチャ

<div class="columns">
<div>

### クライアント側

- ブラウザ / モバイルアプリ
- WebRTC SDP 処理
- ICE 候補交換

</div>
<div>

### TURN リレー

- NAT/ファイアウォール貫通
- Amazon Kinesis Video Streams
- 複数プロバイダー対応

</div>
<div>

### AgentCore Runtime

- WebRTC エンドポイント
- 音声・ビデオ処理
- エージェント実行

</div>
</div>

---

## まとめ

### Amazon Bedrock AgentCore Runtime の次のステップ

- **即座の対応**: 既存の WebSocket 実装から WebRTC への段階的移行検討
- **パイロット実装**: 低遅延が必要なユースケース特定と PoC 実施
- **本番展開**: 複数リージョン対応で グローバルな音声エージェント構築

### 次のアクション

1. [AWS ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/)で WebRTC 実装ガイドを確認
2. サンプルコードで動作検証実施
3. 自社アプリケーションへの統合計画策定

---

## 参考リソース

- **AWS 公式発表**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-webrtc/
- **WebRTC 実装ガイド**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-webrtc.html
- **双方向ストリーミング**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-bidirectional-streaming.html
- **コード例**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-bidirectional-streaming-examples.html
- **Kinesis Video Streams TURN**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-webrtc-get-started-kvs.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**