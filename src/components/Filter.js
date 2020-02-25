import React from 'react';
 
class Filter extends React.Component {
   

    render() {
        return (
            <div className="row">
    <div className="col-md-4">{this.props.count} products found </div>
<div className="col-md-4">
<label>Sort by
<select className="form-control" value={this.props.sort}
onChange={this.props.handleChangeSort}>
    <option value="">select</option>
    <option value="lowest">Lowest to highest</option>
    <option value="highest">Highest to Lowest</option>
</select>
</label>
</div>
<div className="col-md-4">
<label>Filter Size
<select className="form-control" value={this.props.size}
onChange={this.props.handleChangeSize}>
    <option value="">All</option>
    <option value="X">XS</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
    
</select>
</label>
</div>

            </div>
        );
    }
}

 

export default Filter;
