import { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../../state/";
import { connect } from "react-redux";
import { ProductAction } from "../../../state/actions/products";
import { CategoryBoxProps } from "./CategoryBox.d";

// Styles
import "./CategoryBox.scss";
import { withRouter } from "../../../with-router/withRouter";
import { requestData } from "../../../services/requestData";
import { categoriesQuery } from "../../../services/queries";

class CategoryBox extends Component<CategoryBoxProps> {
  handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    category: string
  ) => {
    if (this.state.active !== id) {
      this.setState({
        active: id,
      });
      this.props.getCategoryProducts(category);
    }
    this.props.navigate(`products/?${category}`);
  };

  state: {
    categories: { name: string }[];
    active: number;
  } = {
    active: 0,
    categories: [],
  };

  async componentDidMount() {
    const { data } = await requestData(categoriesQuery());
    const categories: { name: string }[] = data.categories;
    this.setState({
      categories: categories,
    });

    const categoryInUrl = this.props.location.search.split("?")[1];
    if (categoryInUrl) {
      this.setState({
        active: categories
          .map((category, index) => {
            if (categoryInUrl === category.name) return index;
            return undefined;
          })
          .filter((value: number | undefined) => typeof value === "number")[0],
      });

      this.props.getCategoryProducts(categoryInUrl);
    }
  }

  render() {
    const { active } = this.state;

    return (
      <div id="categories">
        {this.state.categories.map((category, index) => (
          <button
            className={active === index ? "current" : ""}
            key={index}
            onClick={(e) => this.handleClick(e, index, category.name)}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<ProductAction>) {
  const { getCategoryProducts } = bindActionCreators(actionCreators, dispatch);

  return {
    getCategoryProducts: (category: string) => getCategoryProducts(category),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CategoryBox));
