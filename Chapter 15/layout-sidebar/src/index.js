import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

class Layout extends React.Component {
  state = {
    showSidebar: false,
  }

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    })
  }

  render() {
    const { showSidebar } = this.state
    return(
      <div className="layout">
        {showSidebar && (
          <Sidebar onHide={this.toggleSidebar}>some sidebar content</Sidebar>
        )}
        <Content
          isSidebarVisible={showSidebar}
          onShowSidebar={this.toggleSidebar}
        >
          some content here
        </Content>
      </div>
    )
  }
}

const Content = ({ children, isSidebarVisible, onShowSidebar }) => {
  return(
    <div className="content">
      {children}
      {!isSidebarVisible && <button onClick={onShowSidebar}>Show</button>}
    </div>
  )
}

const Sidebar = ({onHide, children }) => {
  return(
    <div className="sidebar">
      {children}
      <button onClick={onHide}>Hide</button>
    </div>
  )
}

root.render(
  <Layout />
)