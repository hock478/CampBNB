import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbList = (props) => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Properties</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>{props.property}</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbList