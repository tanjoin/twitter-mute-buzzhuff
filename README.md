# twitter-mute-buzzhuff

Twitter がやたらおすすめ（「いまどうしてる？」）してくる Buzzfeed と ハフィントンポスト を非表示にする拡張機能。
ブロックしても表示されるのは流石にウザい。
Twitterが優遇するクソメディアはどんどん非表示にする予定。

## 使い方

[Chromeウェブストア](https://chrome.google.com/webstore/detail/twitter-mute-buzzfuff/hkmcdjeodpkmkicddjflnhkanfdlggfm?hl=ja&authuser=0)で限定公開してみました。

利用中にエラーがあった場合は、Issueからお知らせください。

~~ストアに出したらBANされそうなのでしません。~~

その代わり以下の方法で利用できます。

1. このリポジトリをダウンロード
2. Chrome拡張機能の**デベロッパーモード**を有効にする
3. **パッケージ化されていない拡張機能を読み込む**から**src**ディレクトリを選択
4. 完了

## CHANGELOG
### Ver. 0.7.0
- x.com に対応
### Ver. 0.6.2
- Google からの警告を修正
### Ver. 0.6.1
- add ねとらぼ調査隊
### Ver. 0.6.0
- manifest version を v3 に変更
- add 東京新聞
- add 毎日新聞
- add AFPBB
- add ひろゆき、ホリエモン（ニックネーム系）
- add フェミニスト（性的〇〇）
- add テレ朝
### Ver. 0.5.4
- mobile.twitter.com に対応 [#7](https://github.com/tanjoin/twitter-mute-buzzhuff/issues/7)
### Ver. 0.5.3
- add ナタリー（コミックナタリー・ステージナタリー等をまとめてナタリーとしてカウント）
- add DIGIDAY［日本版］
- add 刊SPA!・日刊SPA!
- add The Asahi Shimbun GLOBE+
- add ダイヤモンド・オンライン
- フリーワード入力をやりやすいようにテキストエリアの高さを自動調整する機能追加
- 「海外言語対応」が強力すぎるので一括チェックから除外
### Ver. 0.5.2
- バグ修正
- ログ非表示
- ミュート処理の頻度をもとに戻す
  - それに関連する設定を削除
### Ver. 0.5.1
- バグ修正
### Ver. 0.5.0
- 謎の空白が表示されるのを修正
- 互換性を維持すると結局スマートにはならなかった
### Ver. 0.4.0
- フリーワード機能
- データの持ち方を変更（フリーワードに対応するために・既存データとの互換性を検討中）
### Ver. 0.3.0
- 海外対応
### Ver. 0.2.12
- add 色々なメディア
- add コスモポリタン
### Ver. 0.2.11
- checkboxのバグ修正 by @umezaki1212
### Ver. 0.2.10
- add bizble（ビズブル）
### Ver. 0.2.9
- add mi-mollet/ミモレ
### Ver. 0.2.8
- add マイナビニュース
### Ver. 0.2.7
- add COVID-19 · ライブ
### Ver. 0.2.6
- add BLOGOS
- add モデルプレス
- add ORICON NEWS
### Ver. 0.2.5
- add 日本アカデミー賞協会
- add MAMADAYS
- add Business Insider Japan
- add news zero
### Ver. 0.2.4
- add GINZA
### Ver. 0.2.3
- -1ピクセル動かしてホワイトアウトする不具合に対応するオプションを追加
- 🎂〇〇さんの誕生日ってのを消す
### Ver. 0.2.0
- しっかりミュート機能を追加
- add SankeiBiz
- add NHKニュース
- キーワードミュートをテスト その②
- add Tasty Japan
- add FRaU
- add ゲキサカ
- add 現代ビジネス
### Ver. 0.1.6
- キーワードミュートをテスト その①
### Ver. 0.1.5
- 時事ドットコム・日テレNEWS・報道ステーション・新R25編集部・CREA
### Ver. 0.1.4
- 簡単な修正
### Ver. 0.1.3
- add Number編集部
- add 時事メディカル
- add 政治 · トレンド
- add K-POP · トレンド
### Ver. 0.1.2
- add 朝日新聞 option
### Ver. 0.1.1
- add FNN option
- add 東洋経済 option
### Ver. 0.1.0
- 文春を非表示にできるオプションを追加（これにより設定を保存するためのストレージパーミッションが要求されます）
### Ver. 0.0.4
- 余計なログ表示をやめた
### Ver. 0.0.3
- 適用頻度を減らした
### Ver. 0.0.2
- ページ切り替え時に動作するよう一旦変更
### Ver. 0.0.1
- add Buzzfeed
- add ハフィントンポスト
