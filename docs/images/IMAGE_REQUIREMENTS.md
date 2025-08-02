# MCGStarCraft プレイヤーマニュアル - 必要画像リスト

## 取得可能な画像（公式サイトより）
- [x] 資源アイテム画像（collectable resources）
- [x] 建築図面（圧縮機、精製機、発射台の各レイヤー）

## 新規作成が必要な画像

### 1. ゲームプレイ画像
- [x] **rocket_example.png** - ロケットの完成例（15ブロック以内、チェスト配置済み）
- [x] **launchpad_complete.png** - 完成した発射台の全体像
- [x] **rocket_sign_setup.png** - 看板の設置と座標記入例
- [x] **launch_menu.png** - 打ち上げ時の目的地選択メニュー

### 2. 宇宙服関連
- [x] **spacesuit_full.png** - フル装備の宇宙服（4部位）
- [ ] **upgrade_interface.png** - アップグレード画面（金床使用）
- [ ] **air_refill_station.png** - エンドロッドでの空気補給ステーション

### 3. 機械の操作画面
- [x] **refinery_interface.png** - 精製機の操作画面（看板とチェスト）
- [x] **compressor_interface.png** - 圧縮機の操作画面
- [x] **packager_interface.png** - パッケージャーの操作画面

### 4. アイテム画像
- [x] **air_canister_empty.png** - 空の空気キャニスター
- [x] **air_canister_full.png** - 充填済み空気キャニスター
- [x] **fuel_canister.png** - 燃料キャニスター
- [x] **titanium_plates.png** - チタンプレート
- [ ] **upgrade_kits.png** - 各種アップグレードキット（Tier 1-4）

### 5. 惑星環境
- [x] **planet_space.png** - 宇宙空間のスクリーンショット
- [x] **planet_mars.png** - 火星
- [x] **planet_moon.png** - 月

### 6. GUI/HUD要素
- [ ] **suit_hud.png** - 宇宙服着用時のHUD表示（酸素/燃料ゲージ）
- [x] **recipe_book_gui.png** - レシピブックのGUI

### 7. トラブルシューティング
- [ ] **meteor_strike.png** - 隕石雨の様子
- [ ] **rocket_failure.png** - ロケット故障の例

## 画像作成仕様

### 形式
- ファイル形式: PNG（透過対応）
- 解像度: 1920x1080px（スクリーンショット）/ 512x512px（アイテム）

### スタイル
- Minecraft標準のテクスチャスタイルを基準
- 明るく見やすい配色
- 日本語テキストは含めない（後で追加可能なように）

### 命名規則
- 小文字のスネークケース（例: rocket_example.png）
- 意味のある説明的な名前を使用

## 作成優先順位
1. **高優先度**: ロケット関連、宇宙服関連
2. **中優先度**: 機械操作画面、アイテム
3. **低優先度**: 惑星スクリーンショット、トラブルシューティング

## 備考
- スクリーンショットはMinecraft Java Edition 1.20.x以降で撮影
- MCGStarCraftプラグインが正常に動作している状態で撮影
- F1キーでUIを非表示にして撮影（必要に応じて）