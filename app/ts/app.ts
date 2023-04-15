// ライブラリ読み込み
import { express, helmet, cors, consts } from "./index";
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || consts.ports; // port番号を指定
const router = require("../routes/routes");

app.use(helmet());
app.use(cors());
//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// router
app.use(consts.api_path, router);

//サーバ起動
app.listen(port, () => {
  console.log(`🚀🚀🚀listening on port: ${port}`);
});
