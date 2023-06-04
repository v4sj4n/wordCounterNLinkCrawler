import "./LinkCrawler.scss"

function LinkCrawler() {
  return (
    <div className="lc-container">
      <h2>LinkCrawler</h2>
      <div>
        <input type="text" placeholder="Enter a link" />
        <input type="button" value={"Find the links inside the page"} />
      </div>
    </div>
  )
}

export default LinkCrawler
