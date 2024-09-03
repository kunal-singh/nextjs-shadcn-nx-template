'use client';

import { Badge } from '@web/ui-kit/ui/lib/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@web/ui-kit/ui/lib/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@web/ui-kit/ui/lib/ui/table';

function Index() {
  const features = [
    'Nx Monorepo',
    'Shadcn UI Library',
    'Vite Bundler',
    'Strict ESLint Rules',
    'Tailwind CSS',
    'Prettier',
    'Husky and lint-staged',
    'pnpm',
  ];

  const dependencies = [
    { name: 'Next.js', version: '14.2.3' },
    { name: 'React', version: '18.3.1' },
    { name: 'TypeScript', version: '~5.5.2' },
    { name: 'Nx', version: '19.6.4' },
    { name: 'Vite', version: '^5.0.0' },
    { name: 'ESLint', version: '~8.57.0' },
    { name: 'Tailwind CSS', version: '3.4.3' },
    { name: 'pnpm', version: '>=9.4.0' },
    { name: 'Node.js', version: '>=18.18.0' },
  ];

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Next.js+Nx Starter Template
          </CardTitle>
          <CardDescription>
            A comprehensive starter template for Next.js projects powered by Nx,
            designed to provide a robust foundation for scalable and
            maintainable web applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <div className="flex flex-wrap -m-1 mb-4">
            {features.map((feature, index) => (
              <div className="p-1" key={index}>
                <Badge
                  className="text-xs whitespace-nowrap"
                  variant="secondary"
                >
                  {feature}
                </Badge>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2">Key Dependencies</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Dependency</TableHead>
                <TableHead>Version</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dependencies.map((dep, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{dep.name}</TableCell>
                  <TableCell>{dep.version}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              For more details, including getting started guide, please refer to
              the{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://github.com/kunal-singh/nextjs-shadcn-nx-template"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub repository README
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;
