import { useLocation } from "react-router-dom"


export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')

  return (
    <div>
        <h1>Hey {name},Your Contact is...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget consequat orci. Nullam faucibus interdum arcu eu elementum. Duis dictum lacus a massa aliquet, in volutpat orci ornare. Integer quis tempor massa. Nulla leo quam, elementum eu lorem tincidunt, aliquet feugiat metus. Maecenas convallis euismod leo, eget rhoncus nisl lacinia ut. Nulla ut maximus tellus, non vehicula ligula. Pellentesque semper convallis pulvinar. Proin rhoncus, lacus ac pulvinar accumsan, leo justo blandit nisi, vitae tincidunt mi nulla at urna.</p>
    </div>
  )
}
