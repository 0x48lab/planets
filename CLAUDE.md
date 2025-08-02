# MCGStarCraft プレイヤーマニュアル - 作成ガイドライン

## プロジェクト概要
MCGStarCraftプラグインのプレイヤー向けWebマニュアルを作成します。

## 目的
- **対象**: Minecraftサーバーのプレイヤー
- **目標**: 宇宙探索の楽しみ方を分かりやすく説明
- **言語**: 日本語

## ドキュメント構成

### ディレクトリ構造
```
/docs/
  ├── images/           # 画像ファイル
  │   ├── resources/    # 資源アイテム
  │   ├── machines/     # 機械類
  │   ├── rockets/      # ロケット関連
  │   ├── suits/        # 宇宙服
  │   └── planets/      # 惑星
  ├── index.html        # トップページ
  ├── getting-started.html  # はじめに
  ├── resources.html    # 資源収集
  ├── machines.html     # 機械の使い方
  ├── rockets.html      # ロケット建造
  ├── suits.html        # 宇宙服
  ├── planets.html      # 惑星探索
  └── troubleshooting.html  # トラブルシューティング
```

## 参照データ

### 主要な設定ファイル
- `/plugins/MCGStarCraft/config.yml` - メイン設定
- `/plugins/MCGStarCraft/lang.yml` - 日本語/英語メッセージ
- `/plugins/MCGStarCraft/recipes/*.recipe` - レシピデータ
- `/plugins/MCGStarCraft/biomedata/*.yml` - バイオーム設定
- `/plugins/MCGStarCraft/galaxysettings.yml` - 銀河設定
- `/plugins/MCGStarCraft/rocketsettings.yml` - ロケット設定

### 公式ドキュメント
- https://docs.mcgsoft.eu/mcg-starcraft - 英語版公式ドキュメント

## 重要な機能説明

### 1. 資源システム
- **タイタナイト**: 鉄鉱石から入手（8%の確率）
- **コンジット**: 金鉱石から入手（8%の確率）  
- **シリコン**: ブレインコーラルブロックから入手（16%の確率）

### 2. 機械類
- **精製機（Refinery）**: コーラスフルーツ→燃料キャニスター
- **圧縮機（Compressor）**: 空のキャニスター→酸素入りキャニスター
- **パッケージャー（Packager）**: 素材→高度な部品

### 3. ロケットシステム
- 最大高さ: 15ブロック
- 必須要素: チェスト（燃料用）、看板（座標記入）、発射台
- 燃料: コーラスフルーツから精製

### 4. 宇宙服アップグレード
- 段階的アップグレード（Tier 1→2→3→4）
- 種類: 空気タンク、燃料/ジェットパック、放射線防護、温度耐性
- アップグレード方法: 金床でShift+左クリック

### 5. 環境システム
- 酸素管理（宇宙空間で必須）
- 重力変化（ジャンプブースト/スローネス）
- 温度モジュール
- 放射線モジュール

## 技術仕様

### Webページ
- **フレームワーク**: 静的HTML + CSS + JavaScript
- **スタイル**: シンプルで読みやすいデザイン
- **レスポンシブ**: モバイル対応

### 画像要件
- 形式: PNG（透過対応）
- 解像度: スクリーンショット 1920x1080px / アイテム 512x512px
- 命名規則: snake_case（例: rocket_example.png）

## 作成手順

### フェーズ1: 画像準備
1. 公式サイトから利用可能な画像をダウンロード
2. 不足画像のリスト作成（IMAGE_REQUIREMENTS.md参照）
3. スクリーンショット撮影またはダミー画像作成

### フェーズ2: HTML作成
1. 基本テンプレート作成
2. 各ページのコンテンツ作成
3. ナビゲーション実装

### フェーズ3: スタイリング
1. CSSでレイアウト調整
2. Minecraftらしいデザイン適用
3. レスポンシブ対応

### フェーズ4: インタラクティブ要素
1. レシピ検索機能
2. 画像ギャラリー
3. FAQ折りたたみ機能

## 注意事項
- 著作権に配慮（Minecraft、MCGSoftの権利を尊重）
- 最新バージョンの情報を反映
- プレイヤー目線で分かりやすく説明

## 管理者用コマンドリファレンス

### アイテム取得コマンド (/spaceadmin give)

#### 基本資源
```bash
/spaceadmin give titaniteore     # タイタナイト鉱石
/spaceadmin give conduitore      # コンジットクリスタル  
/spaceadmin give silicon         # シリコンセル
/spaceadmin give thermoglue      # 熱接着剤（マグマクリーム）
/spaceadmin give titaniteplate   # チタンプレート
```

#### 空気・燃料系
```bash
/spaceadmin give airtankempty    # 空の空気キャニスター
/spaceadmin give airtankfull     # 充填済み空気キャニスター
/spaceadmin give airtankpoluted  # 汚染空気キャニスター
/spaceadmin give airtankcarbon   # 炭素空気キャニスター
/spaceadmin give fueltankfull    # 充填済み燃料キャニスター
```

#### アップグレードキット
```bash
# 空気タンクアップグレード
/spaceadmin give airupgrade1
/spaceadmin give airupgrade2
/spaceadmin give airupgrade3
/spaceadmin give airupgrade4

# 燃料タンクアップグレード
/spaceadmin give fuelupgrade1
/spaceadmin give fuelupgrade2
/spaceadmin give fuelupgrade3
/spaceadmin give fuelupgrade4

# 放射線防護アップグレード
/spaceadmin give radiationupgrade1
/spaceadmin give radiationupgrade2
/spaceadmin give radiationupgrade3
/spaceadmin give radiationupgrade4

# 温度耐性アップグレード
/spaceadmin give temperatureupgrade1
/spaceadmin give temperatureupgrade2
/spaceadmin give temperatureupgrade3
/spaceadmin give temperatureupgrade4
```

### その他の管理者コマンド
```bash
/spaceadmin tp [worldtype]        # 指定世界へテレポート
/spaceadmin setair [amount] [player]  # プレイヤーの空気量設定
/spaceadmin makedungeon           # ダンジョン生成
/spaceadmin gui                  # 管理者GUI表示
/spaceadmin generatestructure [name]  # 構造物生成
```

### プレイヤー用コマンド
```bash
/space getrecipebook             # レシピブック取得
/space tp [worldtype]            # 世界へテレポート（権限必要）
/space getlog 1/2/3 [logid]      # ストーリーログ取得
```

### 注意事項
- 宇宙服の各パーツ（helm、vest、pants、boots）は直接giveできません
- パッケージャーで作成する必要があります
- プレイヤー用の `/space give` は設定で有効化が必要

## 更新履歴
- 2025-08-02: 初版作成開始
- 2025-08-02: 管理者用コマンドリファレンス追加