var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'ppt參考資料', 'text': '', 'tags': '', 'url': 'ppt參考資料.html'}, {'title': '使用電磁體的假永動機', 'text': '我正在觀看其中一台假永動機的視頻，其中一個球掉進洞裡，然後從斜坡上飛回起始平台。 \n 正如懷疑的那樣，大型基地隱藏著電磁體。 研究一個週期的幀，球似乎突然以一種意想不到的方式圍繞藍色箭頭指向的地方加速。 \n 在這裡，軌道接觸地面，並且由於壓力感測器的原因，電磁鐵似乎在此時打開。 然而，我有點困惑磁鐵是如何加速球的，磁鐵能以這種方式「推動」球嗎？ 如何克服摩擦引起的能量損失？ \n \n \n \n 另一種可行的方法是，當球穿過平台上的孔時，電磁體就會打開。 此電磁體會將球加速到斜坡底部，速度比重力更快。 在球到達坡道最低點之前，電磁體關閉，使球繼續繞著坡道的其餘部分發射回平台，並利用從球到達坡道時獲得的少量額外速度獲得的額外動量。電磁鐵被打開。 \n 當您打開導電物體附近的磁場時，就會在物體中感應出 渦流。 這反過來又產生了自己的磁場。 該場的極性與感應場的極性相反，因此產生排斥。 \n', 'tags': '', 'url': '使用電磁體的假永動機.html'}, {'title': 'This Is Not a Perpetual Motion Machine', 'text': 'Drop a marble into the top of this tabletop sculpture, and it rolls down a ramp and back into itself endlessly. While it might appear to defy the laws of physics, the trick is that its base contains a hidden battery and electromagnet that accelerates the steel sphere as it comes down the ramp. \n https://www.youtube.com/watch?v=ToUKmZF4UKI \n 相關討論串 \n', 'tags': '', 'url': 'This Is Not a Perpetual Motion Machine.html'}, {'title': '作動解說', 'text': '\n \n \n IOP Conference Series: Materials Science and Engineering \n \n \n \n \n \n PAPER \xa0 • \xa0 THE FOLLOWING ARTICLE IS OPEN ACCESS \n A review on how a Perpetual Motion Machine generates electrical power \n M N Hidayat 1 , \xa0 S P Chairandy 1 \xa0 and \xa0 F Ronilaya 1 \n Published under licence by IOP Publishing Ltd IOP Conference Series: Materials Science and Engineering , \xa0 Volume 1098 , \xa0 Computer Science Citation \xa0 M N Hidayat \xa0 et al \xa0 2021 \xa0 IOP Conf. Ser.: Mater. Sci. Eng. \xa0 1098 \xa0 042063 DOI \xa0 10.1088/1757-899X/1098/4/042063 \n Abstract \n \n Electrical energy demand is increasing in accordance with rapid growth of the human population. Since fossil fuels is the most widely used energy source, thus it is depleting very fast. Alternative energy source is urgently needed to replace the use of conventional energy sources. Perpetual Motion Machine (PMM) which can be applied to produce electricity, may be an alternative solution for the problem the world is facing today. The machine is designed to generate power from repulsive forces of permanent magnet without utilizing external sources. Some researches had conducted experiments and Neodymium magnet is most used in the project due to its strong magnetic field. The device is mainly built using a permanent magnet, a rotating wheel and a generator. This paper reviews some aspects on how A Perpetual Motion Machine (PMM) generates electrical power. The aim of the paper is to provide a summary of the topic and its opportunities in further enhancements for better results. The study found that the concept is very effective, ecofriendly and less space needed. However, a larger scale development of the machine along with proper magnet and gear arrangement is currently needed for a better performance and application. \n 相關PDF \n \n \n \n', 'tags': '', 'url': '作動解說.html'}, {'title': 'PPT', 'text': '循環繞圈.pptm \n \n \n \n \n \n \n \n \n PPT中的組裝影片 \n 組裝影片 \n', 'tags': '', 'url': 'PPT.html'}, {'title': '零件繪製', 'text': '', 'tags': '', 'url': '零件繪製.html'}, {'title': '循環系統', 'text': '零件一:底板 \n \n 零件二:支撐桿x3 \n \n 零件三:軌道 \n \n 零件四:圓盤 \n \n', 'tags': '', 'url': '循環系統.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'coppeliaSim', 'text': '', 'tags': '', 'url': 'coppeliaSim.html'}, {'title': '模型', 'text': '', 'tags': '', 'url': '模型.html'}, {'title': '未作動', 'text': '\n \n \n \n', 'tags': '', 'url': '未作動.html'}]};