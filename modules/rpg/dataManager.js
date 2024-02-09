importClass(android.database.sqlite.SQLiteDatabase)
importClass(java.io.File)

const path = "sdcard/rpg/"

/*
 * map, item, user, channel 4개 table
 * 가능
 */

if(File(path).exists()) File(path).mkdirs()

FileStream.write(path+"creater.json",JSON.stringify({
  "creator": [
    "command0929",
    "semi703",
    "minho5964"
]
},null,3))

let db = SQLiteDatabase.openOrCreateDatabase(path+"data.db")
//설마 이름이 100을 넘진 않겠지 생각해보니까 가방 어칼꺼
// 프로필 ㅇㅇ   프로필 이거 바뀜 복구할 수 있게 아이디랑 비번만 알면 가능하게 할 거
db.execSQL("create table if not exists user (hash int, name varchar(100), password text, signup_date datetime, armor_id int, weapon_id int, accessory_id int, bag_info mediumtext)")

//item 이랑 밸런스 수정 하죠 ( +쿠폰 )
//그거 파일 다르면 ㅈㄴ 귀찮음 그리고 저 이제 나가야해서 몰?루
// why  가지마셈

function signup(hash, name, passowrd){

}