# ViteandWebpack
### CRAproject
這個專案是用 webpack替換 create-react-app中 react-scripts,來開啟 react專案,以達到在打包時更加靈活不會被 react-scripts限制.\
雖然網路上有 library可以達到類似的效果,但大多都沒有維護,所以才決定直接用 webpack取代
### Webpackproject
這個專案是用 webpack, Vite,共同打包相同的專案,其中 **vite**處理開發(dev)的部分, **webpack**處理 prod,會這樣處理的原因為 vite在處理 dev速度較快,但在處理 prod時無法達到 webpack contenthash的功能
導致瀏覽器無法正確的更新 cache,\
但這樣處理會有些問題,像是 import.meta.glob這個功能是 vite獨立的在 webpack就出現問題,主要在 Webpackproject/src/ViteRoute呈現
### Rollup
這個專案是 rollup打包的,是要測試 rollup有沒有 contenthash的功能,結果是有的,所以可能 vite在使用 Rollup打包時出了些問題
