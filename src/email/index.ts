/**
 * Email Components Library
 *
 * Custom email component library built for React Router v7 + Cloudflare Workers
 * with native Tailwind CSS v4 support and excellent email client compatibility.
 *
 * @example
 * ```tsx
 * import { Html, Head, Body, Container, Section, Heading, Text, Button } from '@ycore/componentry/email';
 *
 * export function WelcomeEmail({ name }: { name: string }) {
 *   return (
 *     <Html lang="en">
 *       <Head />
 *       <Body className="bg-white font-sans">
 *         <Container className="px-4">
 *           <Section className="py-8">
 *             <Heading level={1} className="text-gray-900 mb-4">
 *               Welcome, {name}!
 *             </Heading>
 *             <Text className="text-gray-600 mb-6">
 *               Thank you for joining us.
 *             </Text>
 *             <Button href="https://app.com/start" className="bg-blue-600 text-white">
 *               Get Started
 *             </Button>
 *           </Section>
 *         </Container>
 *       </Body>
 *     </Html>
 *   );
 * }
 * ```
 */

// Type exports
export type {
  BodyProps,
  ButtonProps,
  CodeProps,
  ColumnProps,
  ContainerProps,
  EmailComponentProps,
  EmailRenderOptions,
  HeadingProps,
  HeadProps,
  HrProps,
  HtmlProps,
  ImageProps,
  LinkProps,
  PreviewProps,
  RenderedEmail,
  RowProps,
  SectionProps,
  SpacerProps,
  TextProps,
} from './components/@types/email-components.types';

// Foundation components
export { Body } from './components/Body';
// Content components
export { Button } from './components/Button';
export { Code } from './components/Code';
// Layout components
export { Column } from './components/Column';
export { Container } from './components/Container';
export { Head } from './components/Head';
export { Heading } from './components/Heading';
export { Hr } from './components/Hr';
export { Html } from './components/Html';
export { Image } from './components/Image';
export { Link } from './components/Link';
export { Preview } from './components/Preview';
export { Row } from './components/Row';
export { Section } from './components/Section';
export { Spacer } from './components/Spacer';
export { Text } from './components/Text';
