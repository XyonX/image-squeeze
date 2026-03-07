import { Shield, UserX, DollarSign } from "lucide-react";

export function TrustBadges() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
			<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold">
				<Shield className="w-3.5 h-3.5" />
				Files never leave your browser
			</div>
			<div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-primary rounded-full text-xs font-semibold">
				<UserX className="w-3.5 h-3.5" />
				No signup required
			</div>
			<div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-semibold">
				<DollarSign className="w-3.5 h-3.5" />
				100% free
			</div>
		</div>
	);
}
