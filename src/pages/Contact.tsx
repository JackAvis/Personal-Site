type ContactProps = {
    setOption: Function;
}
function  Contact(props: ContactProps) {
    props.setOption("Contact");
    return (
        <p>contact info placeholder</p>
    );
};

export default Contact;