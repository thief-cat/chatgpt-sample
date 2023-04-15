import { express, consts } from "../ts/index";
import { TestService } from '../service/TestService';
import { ChatGptService } from '../service/ChatGptService';

const app = express();
// ルーティングする
const router = express.Router();

// routerにルーティングの動作を記述する
router.get(consts.route.r_test, (req, res, next) => {
  const service = new TestService();
  service.test()
  .then(result => res.status(200).send(result))
  .catch(next);
});

router.get(consts.route.r_chatgpt, (req, res, next) => {
  const service = new ChatGptService();
  service.gpt()
  .then(result => res.status(200).send(result))
  .catch(next);
});

// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((req, res) => {
  res.status(404);
  res.render('error', {
    param: {
      status: 404,
      message: 'not found'
    },
  });
});

//routerをモジュールとして扱う準備
module.exports = router;