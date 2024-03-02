// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="img-text-container">
        <img src={currencyLogo} alt={currencyName} className="crypto-image" />
        <p className="cryptoType-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
