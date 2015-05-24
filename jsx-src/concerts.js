var Concerts = React.createClass({
  onClick: function () {
    Backbone.history.navigate("tickets",true);
  },
	render: function () {
		return(
<div className="body-wrap">
<Header />
<Ad />
<section className="content mt-30px">

  <h1><img src="images/concerts.png" /></h1>
  <hr />
  <article className="concert mt-10px">
    <div className="column2-left">
      <p className="title mt-10px">第2回演奏会<br />
メンバーによるプロデュースシリーズ Vol.1<br />
君塚氏、愛を語る！　～弦楽が奏でる愛の物語
      </p>
      <p className="info mt-20px">2015年5月30日(土)　17:30開場　18:00開演<br />
横浜市神奈川区民文化センター　かなっくホール<br />
<br />
モーツァルト/歌劇「フィガロの結婚」序曲<br />
チャイコフスキー/「眠りの森の美女」よりワルツ<br />
クライスラー/「愛の喜び」<br />
シベリウス/「ロマンス」<br />
スーク「弦楽セレナーデより第一楽章」<br />
ベートーヴェン「交響曲第二番」<br />
※全て弦楽合奏版
      </p>
      <button className="mt-2em ml-10px" onClick={this.onClick}>チケットはこちら</button>
    </div>
    <div className="column2-right images">
      <Thumbnail src="/images/concerts/2_1small.jpg" largeImageSrc="/images/concerts/2_1.jpg" alt="パンフレット(表)" />
      <Thumbnail src="/images/concerts/2_2small.jpg" largeImageSrc="/images/concerts/2_2.jpg" alt="パンフレット(裏)" />
    </div>
  </article>
  <hr />
  <article className="concert mt-10px">
    <div className="column2-left">
      <p className="title mt-10px">第1回演奏会
      <span className="past ml-40px">終了</span></p>
      <p className="info mt-20px">2014年5月31日(土)　17:30開場　18:00開演<br />
横浜市緑区民文化センター<br />
<br />
モーツァルト/交響曲第41番”ジュピター”<br />
ハイドン/弦楽四重奏曲第1番 op.1-1<br />
カリンニコフ/セレナーデ<br />
チャイコフスキー/フィレンツェの想い出<br />
      </p>
    </div>
    <div className="column2-right images">
      <Thumbnail src="/images/concerts/1_1small.jpg" largeImageSrc="/images/concerts/1_1.jpg" alt="パンフレット" />
    </div>
  </article>
</section>
<Footer />
</div>
		);
	}
});
