import "./featuredInfo.css"

export default function featuredInfo() {
    return (
        <div className = "featured">
            <div className = "featuredItem">
                <span className = "featuredTitle">Conversion / Inquiry Ratio</span>
                <div className = "featuredDataContainer">
                    <span className = "featuredRate">4.5%</span>
                    <span className = "featuredDiff"> - 1.5%</span>
                </div>
                <span className = "featuredComp">Compared to Last Month</span>
            </div>

            <div className = "featuredItem">
                <span className = "featuredTitle">PCAR</span>
                <div className = "featuredDataContainer">
                    <span className = "featuredRate">97%</span>
                    <span className = "featuredDiff"> - 1.5%</span>
                </div>
                <span className = "featuredComp">Compared to Last Month</span>
            </div>

            <div className = "featuredItem">
                <span className = "featuredTitle">Yield</span>
                <div className = "featuredDataContainer">
                    <span className = "featuredRate">12%</span>
                    <span className = "featuredDiff"> +8%</span>
                </div>
                <span className = "featuredComp">Compared to Last Month</span>
            </div>

            


        </div>
    )
}
