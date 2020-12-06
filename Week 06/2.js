<Expression> ::= <AdditiveExpression>

<AdditiveExpression> ::=  <AdditiveExpression> "+" <MultipleExpression> | <AdditiveExpression> "-" <MultipleExpression> | <MultipleExpression>

<MultipleExpression> ::= <MultipleExpression> "×" <PrimaryExpression> | <MultipleExpression> "/" <PrimaryExpression> | <PrimaryExpression>

<PrimaryExpression> ::= "(" <Expression> ")" | <Integer>