import { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../../state/";
import { connect } from "react-redux";
import { ProductAction } from "../../../state/actions/products";
import { CategoryBoxProps } from "./CategoryBox.d";

// Styles
import "./CategoryBox.scss";

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
      return;
    }
  };

  state = {
    active: 0,
  };

  render() {
    const { active } = this.state;
    const categories = [
      {
        id: 0,
        name: "all",
      },
      {
        id: 1,
        name: "clothes",
      },
      {
        id: 2,
        name: "tech",
      },
    ];

    return (
      <div id="categories">
        {categories.map((category) => (
          <button
            className={active === category.id ? "current" : ""}
            key={category.id}
            onClick={(e) => this.handleClick(e, category.id, category.name)}
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

export default connect(null, mapDispatchToProps)(CategoryBox);
