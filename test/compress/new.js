new_statement: {
    input: {
        new x(1);
        new x(1)(2);
        new x(1)(2)(3);
        new new x(1);
        new new x(1)(2);
        new (new x(1))(2);
        (new new x(1))(2);
    }
    expect_exact: "new x(1);new x(1)(2);new x(1)(2)(3);new new x(1);new new x(1)(2);new new x(1)(2);(new new x(1))(2);"
}
