const Button = {
    Transparent({ className, content, ...props }) {
        return (
            <button {...props}
                className={`tw-rounded-lg tw-bg-transparent tw-border tw-border-primary tw-p-3 tw-px-4 tw-duration-200 ${className}`}>{content}</button>
        );
    },
    Fill({ className, content, ...props }) {
        return (
            <button {...props}
                className={`tw-rounded-lg tw-bg-primary tw-border tw-border-primary tw-p-3 tw-px-4 ${className}`}>{content}</button>
        );
    },
    Light({ className, classNameBtnBg, content, ...props }) {
        return (
            <div className="tw-relative">
                <button className={`filter-btn-light tw-inline-block tw-top-0 tw-right-0 tw-left-0 tw-rounded-lg tw-bg-primary tw-border tw-border-primary  ${classNameBtnBg}`}>{content}</button>
                <button {...props} className={`tw-border tw-border-primary tw-absolute tw-top-0 tw-right-0 tw-left-0 ${className}`}>
                    {content}
                </button>
            </div>
        );
    },

}

export default Button;