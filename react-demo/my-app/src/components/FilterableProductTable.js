import React, { Component } from 'react';

//产品分类头头
class ProductCategoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>);
    }
}

//产品列
class RroductRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

//产品表格
class ProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rows = [];
        var lastCategory = null;
        //表格体
        this.props.products.forEach(function(product) {
            //渲染类目标题
            if(product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>)
            }
            //渲染类目列
            rows.push(<RroductRow product={product} key={product.name}></RroductRow>);
            lastCategory = product.category;
        });
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

//搜索区域
class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <form>
                <input placeholder="Search..." type="text"/>
                <p>
                <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{padding:"15px",background:"#ddd",display:"inline-block"}}>
                <SearchBar />
                <ProductTable products={PRODUCTS} />
            </div>
        );
    }
}

export default FilterableProductTable