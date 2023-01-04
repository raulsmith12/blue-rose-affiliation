const PageHeader = ({ title }) => {
    return (
        <div className="col-12 bg-light py-3 page-header-container">
            <h1 className="display-1 text-shadow-lg page-header">{title}</h1>
        </div>
    )
}

export default PageHeader;